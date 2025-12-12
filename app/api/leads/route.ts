import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabaseServerClient';

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

    // Validation
    const errors: string[] = [];

    if (body.source === 'contact_form') {
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

    // Sanitize input
    const sanitizedData = {
      name: String(body.name || 'שאלון אנונימי').trim().substring(0, 255),
      phone: String(body.phone || '').trim().substring(0, 20),
      child_age: String(body.child_age || '').trim().substring(0, 50),
      message: String(body.message || '').trim().substring(0, 5000),
      source: body.source || 'contact_form',
      quiz_score: body.quiz_score ? parseInt(String(body.quiz_score)) : null,
      quiz_tier: body.quiz_tier ? parseInt(String(body.quiz_tier)) : null,
      ip_address: ip !== 'unknown' ? ip : null,
      user_agent: request.headers.get('user-agent') || null,
    };

    // Insert into Supabase
    const { data, error } = await supabaseServer
      .from('leads')
      .insert([sanitizedData])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'שגיאה בשמירת הנתונים. נסי שוב מאוחר יותר.' },
        { status: 500 }
      );
    }

    // TODO: Send email notification
    // This will be implemented when email service is configured

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

