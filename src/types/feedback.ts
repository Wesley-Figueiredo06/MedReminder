export interface Feedback {
  id: string;
  userId: string;
  message: string;
  createdAt: string;
}

export type CreateFeedbackInput = Pick<Feedback, "message">;