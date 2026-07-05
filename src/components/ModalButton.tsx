import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { useThemedStyles } from "../hooks/useThemedStyles";
import type { ThemeColors } from "../constants/colors";

type Variant = "primary" | "danger" | "ghost";

type Props = {
  label: string;
  onPress: () => void;
  variant?: Variant;
  disabled?: boolean;
};

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    base: {
      width: "100%",
      height: 50,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    disabled: {
      opacity: 0.5,
    },
    textSolid: {
      color: colors.white,
      fontWeight: "600",
    },
    textGhost: {
      color: colors.iconMuted,
      fontWeight: "600",
    },
    primary: {
      backgroundColor: colors.primary,
    },
    danger: {
      backgroundColor: colors.danger,
    },
    ghost: {
      backgroundColor: "transparent",
    },
  });

export default function ModalButton({ label, onPress, variant = "primary", disabled = false }: Props) {
  const styles = useThemedStyles(createStyles);

  return (
    <TouchableOpacity
      style={[styles.base, styles[variant], disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={variant === "ghost" ? styles.textGhost : styles.textSolid}>{label}</Text>
    </TouchableOpacity>
  );
}
