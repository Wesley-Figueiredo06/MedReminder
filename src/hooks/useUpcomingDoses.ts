// Hook temporário baseado em mock (src/mocks/medications.ts). Será substituído
// por um useMedications real integrado ao Supabase — ver docs/PLANEJAMENTOS_FUTUROS.md.
import { useCallback, useState } from "react";
import { useFocusEffect } from "expo-router";
import { getUpcomingDoses } from "../mocks/medications";
import type { UpcomingDose } from "../types";

export function useUpcomingDoses() {
  const [doses, setDoses] = useState<UpcomingDose[]>(getUpcomingDoses());

  useFocusEffect(
    useCallback(() => {
      setDoses(getUpcomingDoses());
    }, []),
  );

  return { doses };
}
