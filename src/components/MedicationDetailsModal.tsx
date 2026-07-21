// PLANEJAMENTOS FUTUROS:
// - Buscar detalhes do medicamento via Supabase (ex: getMedicationById),
//   evitando trazer `instructions` na query de listagem
// - `instructions` permanece como coluna simples (TEXT) na tabela `medications`;
//   reavaliar tabela relacional apenas se surgir necessidade de múltiplas
//   instruções por medicamento ou instruções reutilizáveis entre eles
// - Implementar ação do botão "Editar"
// - Implementar ação do botão "Excluir" (com confirmação)

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Pill, Clock, Info, Pencil, Trash2 } from "lucide-react-native";
import { useThemedStyles } from "../hooks/useThemedStyles";
import { useTheme } from "../contexts/ThemeContext";
import type { ThemeColors } from "../constants/colors";
import Modal from "./Modal";
import type { UpcomingDose } from "../types";

interface MedicationDetailsModalProps {
  dose: UpcomingDose | null;
  visible: boolean;
  onClose: () => void;
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    header: {
      flex: 1,
      alignItems: "center",
      gap: 4,
    },
    headerIconBox: {
      width: 56,
      height: 56,
      borderRadius: 16,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.primary,
    },
    headerName: {
      fontWeight: "bold",
      fontSize: 18,
      color: colors.textPrimary,
    },
    headerSubtitle: {
      color: colors.secondaryText,
    },

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

    footer: {
      flexDirection: "row",
      gap: 12,
    },
    editButton: {
      flex: 1,
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 12,
      borderRadius: 10,
      backgroundColor: colors.surface,
      borderWidth: 1,
      borderColor: colors.border,
    },
    editButtonText: {
      fontWeight: "600",
      color: colors.textPrimary,
    },
    deleteButton: {
      flex: 1,
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 12,
      borderRadius: 10,
      backgroundColor: colors.dangerBackground,
      borderWidth: 1,
      borderColor: colors.danger,
    },
    deleteButtonText: {
      fontWeight: "600",
      color: colors.danger,
    },
  });

export default function MedicationDetailsModal({
  dose,
  visible,
  onClose,
}: MedicationDetailsModalProps) {
  const styles = useThemedStyles(createStyles);
  const { colors } = useTheme();

  if (!dose) {
    return null;
  }

  const headerContent = (
    <View style={styles.header}>
      <View style={styles.headerIconBox}>
        <Pill size={28} color={colors.white} />
      </View>
      <Text style={styles.headerName}>{dose.medicationName}</Text>
      <Text style={styles.headerSubtitle}>Detalhes do medicamento</Text>
    </View>
  );

  return (
    <Modal visible={visible} title={headerContent} onClose={onClose}>
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
            <Text style={styles.detailLabel}>Instruções</Text>
          </View>
          <Text style={styles.instructionsText}>{dose.instructions}</Text>
        </View>
      )}

      <View style={styles.footer}>
        <TouchableOpacity style={styles.editButton}>
          <Pencil size={16} color={colors.textPrimary} />
          <Text style={styles.editButtonText}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deleteButton}>
          <Trash2 size={16} color={colors.danger} />
          <Text style={styles.deleteButtonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}