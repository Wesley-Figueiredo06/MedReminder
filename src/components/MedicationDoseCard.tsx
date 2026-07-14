import { View, Text, TouchableOpacity } from "react-native";
import { Pill, Droplet } from "lucide-react-native";
import { createHomeStyles } from "../styles/styleHome";
import { useThemedStyles } from "../hooks/useThemedStyles";
import { useTheme } from "../contexts/ThemeContext";
import type { UpcomingDose } from "../types";

interface MedicationDoseCardProps {
  dose: UpcomingDose;
}

export default function MedicationDoseCard({ dose }: MedicationDoseCardProps) {
  const style = useThemedStyles(createHomeStyles);
  const { colors } = useTheme();

  const isPill = dose.iconType === "pill";

  return (
    <View style={style.doseCard}>
      <View style={[style.doseIconBox, isPill ? style.doseIconBoxPill : style.doseIconBoxDrop]}>
        {isPill ? (
          <Pill size={22} color={colors.success} />
        ) : (
          <Droplet size={22} color={colors.infoText} />
        )}
      </View>

      <View style={style.doseInfo}>
        <Text style={style.doseName}>{dose.medicationName}</Text>
        <Text style={style.doseSubtitle}>
          {dose.dosageLabel} • {dose.frequencyLabel} • {dose.time}
        </Text>
      </View>

      <TouchableOpacity style={style.takeButton}>
        <Text style={style.takeButtonText}>Tomar</Text>
      </TouchableOpacity>
    </View>
  );
}
