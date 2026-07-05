import { useState } from "react";
import { submitFeedback } from "../services/feedbackService";

export function useFeedbackForm(onSuccess: () => void) {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canSubmit = message.trim().length > 0 && !isSubmitting;

  async function handleSubmit() {
    if (!canSubmit) return;

    setIsSubmitting(true);
    setError(null);
    try {
      await submitFeedback({ message: message.trim() });
      setMessage("");
      onSuccess();
    } catch {
      setError("Não foi possível enviar seu feedback. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return { message, setMessage, isSubmitting, error, canSubmit, handleSubmit };
}