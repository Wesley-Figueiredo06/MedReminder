export interface ThemeColors {
  primary: string;
  primaryDark: string;
  primaryAccent: string;
  background: string;
  surface: string;
  textPrimary: string;
  inputBackground: string;
  inputBorder: string;
  placeholder: string;
  secondaryText: string;
  iconMuted: string;
  iconActive: string;
  iconBackground: string;
  backgroundLight: string;
  bellBackground: string;
  bellBorder: string;
  pillBackground: string;
  pillBorder: string;
  white: string;
  border: string;
  borderLight: string;
  danger: string;
  dangerBackground: string;
  errorText: string;
  success: string;
  successDark: string;
  successBackground: string;
  successBorder: string;
  textMuted: string;
  infoBackground: string;
  infoBorder: string;
  infoText: string;
}

export const lightColors: ThemeColors = {
  primary: "#155DFC",
  primaryDark: "#1C398E",
  primaryAccent: "#155DFC",
  background: "#FFFFFF",
  surface: "#FFFFFF",
  textPrimary: "#000000",
  inputBackground: "#F9FAFB",
  inputBorder: "#99A1AF",
  placeholder: "#99A1AF",
  secondaryText: "#6A7282",
  iconMuted: "#6A7282",
  iconActive: "#588DFD",
  iconBackground: "#F3F4F6",
  backgroundLight: "#F3F4F6",
  bellBackground: "#EFF6FF",
  bellBorder: "#DBEAFE",
  pillBackground: "#ECFDF5",
  pillBorder: "#D0FAE5",
  white: "#FFFFFF",
  border: "#E5E7EB",
  borderLight: "#E5E7EB",
  danger: "#FB3039",
  dangerBackground: "#FEF2F2",
  errorText: "#E7000B",
  success: "#0F9981",
  successDark: "#004F3B",
  successBackground: "#ECFDF5",
  successBorder: "#D0FAE5",
  textMuted: "#A5A9CA",
  infoBackground: "#EFF6FF",
  infoBorder: "#DBEAFE",
  infoText: "#193CB8",
};

export const darkColors: ThemeColors = {
  primary: "#155DFC",
  primaryDark: "#BFDBFE",
  primaryAccent: "#3B82F6",
  background: "#0F172A",
  surface: "#1E293B",
  textPrimary: "#F1F5F9",
  inputBackground: "#1E293B",
  inputBorder: "#334155",
  placeholder: "#64748B",
  secondaryText: "#94A3B8",
  iconMuted: "#94A3B8",
  iconActive: "#3B82F6",
  iconBackground: "#293548",
  backgroundLight: "#293548",
  bellBackground: "#172554",
  bellBorder: "#1E3A8A",
  pillBackground: "#064E3B",
  pillBorder: "#065F46",
  white: "#FFFFFF",
  border: "#334155",
  borderLight: "#334155",
  danger: "#F87171",
  dangerBackground: "#3B1219",
  errorText: "#F87171",
  success: "#34D399",
  successDark: "#A7F3D0",
  successBackground: "#064E3B",
  successBorder: "#065F46",
  textMuted: "#7C86AD",
  infoBackground: "#172554",
  infoBorder: "#1E3A8A",
  infoText: "#93C5FD",
};

/** @deprecated Migrar para useTheme() — remover ao fim da Fase 4 */
export const colors = lightColors;