// Hook temporário baseado em mock (src/mocks/medications.ts). Será substituído
// por um useMedications real integrado ao Supabase — ver docs/PLANEJAMENTOS_FUTUROS.md.
import { useCallback, useState } from "react";
import { useFocusEffect } from "expo-router";
import { getUpcomingDoses, updateUpcomingDose } from "../mocks/medications";
import type { UpcomingDose } from "../types";

export function useUpcomingDoses() {
  const [doses, setDoses] = useState<UpcomingDose[]>(getUpcomingDoses());

  useFocusEffect(
    useCallback(() => {
      setDoses(getUpcomingDoses());
    }, []),
  );

  const updateDose = useCallback(
    async (id: string, changes: Partial<Omit<UpcomingDose, "id">>) => {
      updateUpcomingDose(id, changes);
      setDoses(getUpcomingDoses());
    },
    [],
  );

  return { doses, updateDose };
}
