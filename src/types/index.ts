export type DoseFrequency =
  | "1x ao dia"
  | "2x ao dia"
  | "3x ao dia"
  | "4x ao dia"
  | "A cada 8 horas"
  | "A cada 12 horas"
  | "Somente quando necessário";

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: DoseFrequency;
  startDate: string;
  notes?: string;
  userId: string;
  createdAt: string;
}

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  createdAt: string;
}

export interface DoseRecord {
  id: string;
  medicationId: string;
  takenAt: string;
  scheduledAt: string;
}
