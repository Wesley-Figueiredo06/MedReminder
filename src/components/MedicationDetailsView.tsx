import { View, Text, StyleSheet } from "react-native";
import { Pill, Clock, Info } from "lucide-react-native";
import { useThemedStyles } from "../hooks/useThemedStyles";
import { useTheme } from "../contexts/ThemeContext";
import type { ThemeColors } from "../constants/colors";
import type { UpcomingDose } from "../types";

interface MedicationDetailsViewProps {
  dose: UpcomingDose;
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    grid: {
      flexDirection: "row",
      gap: 12,
    },
    detailBlock: {
      flex: 1,
      gap: 6,
      padding: 12,
      borderRadius: 12,
      backgroundColor: colors.surface,
      borderWidth: 1,
      borderColor: colors.border,
    },
    detailLabelRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
    },
    detailLabel: {
      color: colors.secondaryText,
    },
    detailValue: {
      fontWeight: "bold",
      color: colors.textPrimary,
    },

    instructionsBlock: {
      marginTop: 16,
      gap: 6,
      padding: 12,
      borderRadius: 12,
      backgroundColor: colors.surface,
      borderWidth: 1,
      borderColor: colors.border,
    },
    instructionsText: {
      color: colors.textPrimary,
    },
  });

export default function MedicationDetailsView({ dose }: MedicationDetailsViewProps) {
  const styles = useThemedStyles(createStyles);
  const { colors } = useTheme();

  return (
    <View>
      <View style={styles.grid}>
        <View style={styles.detailBlock}>
          <View style={styles.detailLabelRow}>
            <Pill size={16} color={colors.secondaryText} />
            <Text style={styles.detailLabel}>Dosagem</Text>
          </View>
          <Text style={styles.detailValue}>{dose.dosageLabel}</Text>
        </View>

        <View style={styles.detailBlock}>
          <View style={styles.detailLabelRow}>
            <Clock size={16} color={colors.secondaryText} />
            <Text style={styles.detailLabel}>Horário</Text>
          </View>
          <Text style={styles.detailValue}>{dose.time}</Text>
        </View>
      </View>

      {dose.instructions && (
        <View style={styles.instructionsBlock}>
          <View style={styles.detailLabelRow}>
            <Info size={16} color={colors.secondaryText} />
            <Text style={styles.detailLabel}>Instruções/Observações</Text>
          </View>
          <Text style={styles.instructionsText}>{dose.instructions}</Text>
        </View>
      )}
    </View>
  );
}
