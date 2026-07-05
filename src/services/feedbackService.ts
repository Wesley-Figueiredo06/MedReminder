import { CreateFeedbackInput } from "../types/feedback";

// Mock temporário; corpo real (Supabase) documentado em docs/PLANEJAMENTOS_FUTUROS.md.
export async function submitFeedback(input: CreateFeedbackInput): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 800));
  console.log("[feedbackService] feedback recebido:", input);
}