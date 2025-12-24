-- Migration: Add quiz tracking fields to leads table
-- Date: 2024
-- Description: Adds fields to track quiz progress and completion status

-- Add new columns to leads table
ALTER TABLE public.leads
ADD COLUMN IF NOT EXISTS current_question_index INTEGER,
ADD COLUMN IF NOT EXISTS quiz_completed BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS quiz_started_at TIMESTAMP WITH TIME ZONE;

-- Add index for quiz_completed for faster queries
CREATE INDEX IF NOT EXISTS idx_leads_quiz_completed ON public.leads(quiz_completed);

-- Add index for quiz_started_at for analytics
CREATE INDEX IF NOT EXISTS idx_leads_quiz_started_at ON public.leads(quiz_started_at);

-- Add comment to columns for documentation
COMMENT ON COLUMN public.leads.current_question_index IS 'The last question index the user answered (0-based)';
COMMENT ON COLUMN public.leads.quiz_completed IS 'Whether the user completed the entire quiz';
COMMENT ON COLUMN public.leads.quiz_started_at IS 'When the user started the quiz (after filling contact info)';

