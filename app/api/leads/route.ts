import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabaseServerClient';
import { sendContactFormEmail } from '@/lib/email';
import { sendWhatsAppNotification } from '@/lib/whatsapp';

// Simple rate limiting (in-memory, for production use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60000; // 1 minute
  const maxRequests = 3;

  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;
  return true;
}

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  return request.headers.get('x-real-ip') || 'unknown';
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIP(request);

    // Rate limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'יותר מדי בקשות. נסי שוב בעוד דקה.' },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Check if this is an update to an existing lead (for quiz progress)
    const isUpdate = body.lead_id && body.source === 'sleep_quiz';

    // Validation
    const errors: string[] = [];

    // For updates, name and phone are not required (already saved)
    if (!isUpdate) {
      // Validate name and phone for new leads
      if (!body.name || body.name.trim().length === 0) {
        errors.push('שם הוא שדה חובה');
      }
      if (!body.phone || body.phone.trim().length === 0) {
        errors.push('טלפון הוא שדה חובה');
      } else {
        const phoneRegex = /^0[2-9]\d{7,8}$/;
        if (!phoneRegex.test(body.phone.replace(/-/g, ''))) {
          errors.push('מספר טלפון לא תקין');
        }
      }
    }

    if (body.source === 'contact_form' && !isUpdate) {
      if (!body.child_age || body.child_age.trim().length === 0) {
        errors.push('גיל הילד הוא שדה חובה');
      }
      if (!body.message || body.message.trim().length === 0) {
        errors.push('הודעה היא שדה חובה');
      }
    }

    // Honeypot check (if exists in body)
    if (body.honeypot && body.honeypot.length > 0) {
      return NextResponse.json(
        { error: 'Bot detected' },
        { status: 400 }
      );
    }

    if (errors.length > 0) {
      return NextResponse.json(
        { error: errors.join(', ') },
        { status: 400 }
      );
    }

    let data: any;
    let error: any;

    if (isUpdate) {
      // Update existing lead - only update fields that are provided
      const updateData: any = {};
      
      if (body.current_question_index !== undefined) {
        updateData.current_question_index = parseInt(String(body.current_question_index));
      }
      if (body.quiz_completed !== undefined) {
        updateData.quiz_completed = Boolean(body.quiz_completed);
      }
      if (body.quiz_score !== undefined) {
        updateData.quiz_score = parseInt(String(body.quiz_score));
      }
      if (body.quiz_tier !== undefined) {
        updateData.quiz_tier = parseInt(String(body.quiz_tier));
      }

      const { data: updateResult, error: updateError } = await supabaseServer
        .from('leads')
        .update(updateData)
        .eq('id', body.lead_id)
        .select()
        .single();

      data = updateResult;
      error = updateError;

      // Save quiz responses if provided (only on completion)
      if (body.quiz_responses && Array.isArray(body.quiz_responses) && body.quiz_responses.length > 0 && data?.id) {
        const responsesToInsert = body.quiz_responses.map((response: any) => ({
          lead_id: data.id,
          question_index: response.question_index,
          answer_value: String(response.answer_value || '').trim(),
          answer_score: parseInt(String(response.answer_score || 0)),
        }));

        const { error: responsesError } = await supabaseServer
          .from('quiz_responses')
          .insert(responsesToInsert);

        if (responsesError) {
          console.error('Error saving quiz responses:', responsesError);
          // Don't fail the entire request if responses fail to save
        }
      }
    } else {
      // Insert new lead
      const sanitizedData: any = {
        name: String(body.name || 'שאלון אנונימי').trim().substring(0, 255),
        phone: String(body.phone || '').trim().substring(0, 20),
        child_age: String(body.child_age || '').trim().substring(0, 50),
        message: String(body.message || '').trim().substring(0, 5000),
        source: body.source || 'contact_form',
        quiz_score: body.quiz_score ? parseInt(String(body.quiz_score)) : null,
        quiz_tier: body.quiz_tier ? parseInt(String(body.quiz_tier)) : null,
      };

      // Add quiz tracking fields if provided
      if (body.source === 'sleep_quiz') {
        if (body.current_question_index !== undefined) {
          sanitizedData.current_question_index = parseInt(String(body.current_question_index));
        }
        if (body.quiz_completed !== undefined) {
          sanitizedData.quiz_completed = Boolean(body.quiz_completed);
        }
        if (body.quiz_started_at) {
          sanitizedData.quiz_started_at = body.quiz_started_at;
        } else {
          // Set quiz_started_at when creating new lead for quiz
          sanitizedData.quiz_started_at = new Date().toISOString();
        }
      }

      // Add optional fields
      if (ip !== 'unknown') {
        sanitizedData.ip_address = ip;
      }
      const userAgent = request.headers.get('user-agent');
      if (userAgent) {
        sanitizedData.user_agent = userAgent;
      }

      const { data: insertData, error: insertError } = await supabaseServer
        .from('leads')
        .insert([sanitizedData])
        .select()
        .single();

      data = insertData;
      error = insertError;

      // Save quiz responses if provided
      if (body.quiz_responses && Array.isArray(body.quiz_responses) && body.quiz_responses.length > 0 && data?.id) {
        const responsesToInsert = body.quiz_responses.map((response: any) => ({
          lead_id: data.id,
          question_index: response.question_index,
          answer_value: String(response.answer_value || '').trim(),
          answer_score: parseInt(String(response.answer_score || 0)),
        }));

        const { error: responsesError } = await supabaseServer
          .from('quiz_responses')
          .insert(responsesToInsert);

        if (responsesError) {
          console.error('Error saving quiz responses:', responsesError);
          // Don't fail the entire request if responses fail to save
        }
      }
    }

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'שגיאה בשמירת הנתונים. נסי שוב מאוחר יותר.' },
        { status: 500 }
      );
    }

    // Send email/WhatsApp notifications only for new leads (not for updates)
    if (!isUpdate && data?.id) {
      // Send email notification (non-blocking) - only for new leads
      console.log('Sending email notification for lead:', data.id);
      const leadData = {
        name: String(body.name || '').trim(),
        phone: String(body.phone || '').trim(),
        child_age: String(body.child_age || '').trim(),
        message: String(body.message || '').trim(),
        source: body.source || 'contact_form',
        quiz_score: body.quiz_score ? parseInt(String(body.quiz_score)) : null,
        quiz_tier: body.quiz_tier ? parseInt(String(body.quiz_tier)) : null,
      };

      sendContactFormEmail(leadData)
        .then((success) => {
          if (success) {
            console.log('Email sent successfully for lead:', data.id);
          } else {
            console.error('Email sending failed for lead:', data.id);
          }
        })
        .catch((err) => {
          console.error('Failed to send email for lead:', data.id, err);
        });

      // Send WhatsApp notification (non-blocking) - only for new leads
      sendWhatsAppNotification({
        name: leadData.name,
        phone: leadData.phone,
        child_age: leadData.child_age,
        message: leadData.message,
        source: leadData.source,
      }).catch((err) => {
        console.error('Failed to send WhatsApp:', err);
      });
    }

    return NextResponse.json(
      { success: true, lead_id: data.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'שגיאה כללית. נסי שוב מאוחר יותר.' },
      { status: 500 }
    );
  }
}

