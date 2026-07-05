import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { darkColors, lightColors, type ThemeColors } from "../constants/colors";

const THEME_STORAGE_KEY = "@medremind:theme";

type ThemePreference = "light" | "dark";

interface ThemeContextValue {
  colors: ThemeColors;
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function isThemePreference(value: string | null): value is ThemePreference {
  return value === "light" || value === "dark";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const systemScheme = useColorScheme();
  const [isDark, setIsDark] = useState(systemScheme === "dark");

  useEffect(() => {
    AsyncStorage.getItem(THEME_STORAGE_KEY)
      .then((storedValue) => {
        if (isThemePreference(storedValue)) {
          setIsDark(storedValue === "dark");
        }
      })
      .catch(() => {});
  }, []);

  function toggleTheme() {
    setIsDark((previousIsDark) => {
      const nextIsDark = !previousIsDark;
      AsyncStorage.setItem(
        THEME_STORAGE_KEY,
        nextIsDark ? "dark" : "light",
      ).catch(() => {});
      return nextIsDark;
    });
  }

  return (
    <ThemeContext.Provider
      value={{ colors: isDark ? darkColors : lightColors, isDark, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme precisa ser usado dentro de um ThemeProvider");
  }
  return context;
}
