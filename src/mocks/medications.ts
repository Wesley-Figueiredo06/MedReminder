import type { UpcomingDose } from "../types";

const MAX_UPCOMING_DOSES = 6;

let doses: UpcomingDose[] = [
  {
    id: "1",
    medicationName: "Paracetamol 500mg",
    dosageLabel: "1 comprimido",
    frequencyLabel: "3x dia",
    time: "08:00",
    iconType: "pill",
  },
  {
    id: "2",
    medicationName: "Amoxicilina 875mg",
    dosageLabel: "1 cápsula",
    frequencyLabel: "2x dia",
    time: "12:00",
    iconType: "pill",
  },
  {
    id: "3",
    medicationName: "Vitamina D 2000 UI",
    dosageLabel: "1 gota",
    frequencyLabel: "1x dia",
    time: "10:00",
    iconType: "drop",
  },
];

export function getUpcomingDoses(): UpcomingDose[] {
  return [...doses];
}

export function addUpcomingDose(dose: UpcomingDose): void {
  doses = [dose, ...doses].slice(0, MAX_UPCOMING_DOSES);
}

export function updateUpcomingDose(
  id: string,
  changes: Partial<Omit<UpcomingDose, "id">>,
): void {
  doses = doses.map((dose) => (dose.id === id ? { ...dose, ...changes } : dose));
}
