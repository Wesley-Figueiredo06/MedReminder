import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { color } from "../styles/styleSettings";

type Variant = "primary" | "danger" | "ghost";

type Props = {
  label: string;
  onPress: () => void;
  variant?: Variant;
  disabled?: boolean;
};

export default function ModalButton({ label, onPress, variant = "primary", disabled = false }: Props) {
  return (
    <TouchableOpacity
      style={[styles.base, variantStyles[variant], disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={variant === "ghost" ? styles.textGhost : styles.textSolid}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
    color: "white",
    fontWeight: "600",
  },
  textGhost: {
    color: color.primaryIconColor,
    fontWeight: "600",
  },
});

const variantStyles = StyleSheet.create({
  primary: {
    backgroundColor: color.primaryColor,
  },
  danger: {
    backgroundColor: color.dangerColor,
  },
  ghost: {
    backgroundColor: "transparent",
  },
});