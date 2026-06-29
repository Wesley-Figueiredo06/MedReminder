export * from "./colors";

export const DOSE_FREQUENCIES = [
  "1x ao dia",
  "2x ao dia",
  "3x ao dia",
  "4x ao dia",
  "A cada 8 horas",
  "A cada 12 horas",
  "Somente quando necessário",
] as const;

export const ROUTES = {
  home: "/home",
  login: "/login",
  register: "/register",
  addMedication: "/addMedication",
  settings: "/settings",
} as const;
