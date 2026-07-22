import { useCallback, useEffect, useState } from "react";
import type { UpcomingDose } from "../types";

interface MedicationEditFormFields {
  name: string;
  dosage: string;
  time: string;
  instructions: string;
}

interface UseMedicationEditForm extends MedicationEditFormFields {
  setName: (value: string) => void;
  setDosage: (value: string) => void;
  setTime: (value: string) => void;
  setInstructions: (value: string) => void;
  reset: () => void;
  getChanges: () => Partial<Omit<UpcomingDose, "id">>;
}

function buildFieldsFromDose(dose: UpcomingDose | null): MedicationEditFormFields {
  return {
    name: dose?.medicationName ?? "",
    dosage: dose?.dosageLabel ?? "",
    time: dose?.time ?? "",
    instructions: dose?.instructions ?? "",
  };
}

export function useMedicationEditForm(dose: UpcomingDose | null): UseMedicationEditForm {
  const [name, setName] = useState(() => buildFieldsFromDose(dose).name);
  const [dosage, setDosage] = useState(() => buildFieldsFromDose(dose).dosage);
  const [time, setTime] = useState(() => buildFieldsFromDose(dose).time);
  const [instructions, setInstructions] = useState(() => buildFieldsFromDose(dose).instructions);

  const reset = useCallback(() => {
    const fields = buildFieldsFromDose(dose);
    setName(fields.name);
    setDosage(fields.dosage);
    setTime(fields.time);
    setInstructions(fields.instructions);
  }, [dose]);

  useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dose?.id]);

  const getChanges = useCallback(
    (): Partial<Omit<UpcomingDose, "id">> => ({
      medicationName: name,
      dosageLabel: dosage,
      time,
      instructions: instructions || undefined,
    }),
    [name, dosage, time, instructions],
  );

  return {
    name,
    dosage,
    time,
    instructions,
    setName,
    setDosage,
    setTime,
    setInstructions,
    reset,
    getChanges,
  };
}
