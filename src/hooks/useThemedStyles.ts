import { useMemo } from "react";
import { useTheme } from "../contexts/ThemeContext";
import type { ThemeColors } from "../constants/colors";

export function useThemedStyles<T>(createStyles: (colors: ThemeColors) => T): T {
  const { colors } = useTheme();
  return useMemo(() => createStyles(colors), [colors, createStyles]);
}
