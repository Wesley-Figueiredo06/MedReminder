import { View, Text, TouchableOpacity } from "react-native";
import { Pill, Droplet } from "lucide-react-native";
import { createHomeStyles } from "../styles/styleHome";
import { useThemedStyles } from "../hooks/useThemedStyles";
import { useTheme } from "../contexts/ThemeContext";
import type { UpcomingDose } from "../types";

interface MedicationDoseCardProps {
  dose: UpcomingDose;
  onPress: () => void;
}

export default function MedicationDoseCard({ dose, onPress }: MedicationDoseCardProps) {
  const style = useThemedStyles(createHomeStyles);
  const { colors } = useTheme();

  const isPill = dose.iconType === "pill";

  return (
    <View style={style.doseCard}>
      <View style={[style.doseIconBox, isPill ? style.doseIconBoxPill : style.doseIconBoxDrop]}>
        {isPill ? (
          <Pill size={22} color={colors.iconActive} />
        ) : (
          <Droplet size={22} color={colors.primary} />
        )}
      </View>

      <TouchableOpacity style={style.doseInfo} onPress={onPress}>
        <Text style={style.doseName}>{dose.medicationName}</Text>
        <Text style={style.doseSubtitle}>
          {dose.dosageLabel} • {dose.frequencyLabel} • {dose.time}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.takeButton}>
        <Text style={style.takeButtonText}>Tomar</Text>
      </TouchableOpacity>
    </View>
  );
}
