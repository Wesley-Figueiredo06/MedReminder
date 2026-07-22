// PLANEJAMENTOS FUTUROS:
// - Buscar detalhes do medicamento via Supabase (ex: getMedicationById),
//   evitando trazer `instructions` na query de listagem
// - `instructions` permanece como coluna simples (TEXT) na tabela `medications`;
//   reavaliar tabela relacional apenas se surgir necessidade de múltiplas
//   instruções por medicamento ou instruções reutilizáveis entre eles
// - `onSave` hoje persiste apenas no mock em memória; trocar por
//   medicationService.updateMedication (PUT) quando o Supabase estiver integrado
// - Implementar ação do botão "Excluir" (com confirmação)

import { useEffect, useState } from "react";
import { View, Text, Animated, StyleSheet, type LayoutChangeEvent } from "react-native";
import { Pill, Pencil } from "lucide-react-native";
import { useThemedStyles } from "../hooks/useThemedStyles";
import { useTheme } from "../contexts/ThemeContext";
import { useMedicationEditForm } from "../hooks/useMedicationEditForm";
import { useSlideTransition } from "../hooks/useSlideTransition";
import type { ThemeColors } from "../constants/colors";
import Modal from "./Modal";
import ModalButton from "./ModalButton";
import MedicationDetailsView from "./MedicationDetailsView";
import MedicationEditForm from "./MedicationEditForm";
import type { UpcomingDose } from "../types";

interface MedicationDetailsModalProps {
  dose: UpcomingDose | null;
  visible: boolean;
  onClose: () => void;
  onSave: (id: string, changes: Partial<Omit<UpcomingDose, "id">>) => Promise<void>;
}

type Mode = "details" | "edit";

const DEFAULT_PANE_WIDTH = 310;

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
      textAlign: "center",
    },

    viewport: {
      width: "100%",
      overflow: "hidden",
    },

    footer: {
      flexDirection: "row",
      gap: 12,
    },
    footerButton: {
      flex: 1,
    },
  });

export default function MedicationDetailsModal({
  dose,
  visible,
  onClose,
  onSave,
}: MedicationDetailsModalProps) {
  const styles = useThemedStyles(createStyles);
  const { colors } = useTheme();

  const [mode, setMode] = useState<Mode>("details");
  const [paneWidth, setPaneWidth] = useState(DEFAULT_PANE_WIDTH);
  const [isSaving, setIsSaving] = useState(false);

  const editForm = useMedicationEditForm(dose);
  const slide = useSlideTransition(mode, paneWidth);

  useEffect(() => {
    if (!visible || !dose) {
      setMode("details");
      editForm.reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, dose?.id]);

  if (!dose) {
    return null;
  }

  function handlePaneLayout(event: LayoutChangeEvent) {
    setPaneWidth(event.nativeEvent.layout.width);
  }

  function handleEditPress() {
    setMode("edit");
  }

  function handleCancel() {
    editForm.reset();
    setMode("details");
  }

  async function handleSave() {
    setIsSaving(true);
    try {
      await onSave(dose!.id, editForm.getChanges());
      setMode("details");
    } catch (error) {
      console.error("Falha ao salvar edição do medicamento:", error);
    } finally {
      setIsSaving(false);
    }
  }

  function handleDeletePress() {
    // Stub — ação e confirmação de exclusão ainda pendentes (ver PLANEJAMENTOS_FUTUROS.md).
  }

  const headerContent =
    mode === "details" ? (
      <View style={styles.header}>
        <View style={styles.headerIconBox}>
          <Pill size={28} color={colors.white} />
        </View>
        <Text style={styles.headerName}>{dose.medicationName}</Text>
        <Text style={styles.headerSubtitle}>Detalhes do medicamento</Text>
      </View>
    ) : (
      <View style={styles.header}>
        <View style={styles.headerIconBox}>
          <Pencil size={24} color={colors.white} />
        </View>
        <Text style={styles.headerName}>Editar Registro</Text>
        <Text style={styles.headerSubtitle}>
          Alterando informações de {dose.medicationName}
        </Text>
      </View>
    );

  return (
    <Modal visible={visible} title={headerContent} onClose={onClose}>
      <View style={styles.viewport} onLayout={handlePaneLayout}>
        <Animated.View style={slide.style}>
          {mode === "details" ? (
            <MedicationDetailsView dose={dose} />
          ) : (
            <MedicationEditForm
              name={editForm.name}
              dosage={editForm.dosage}
              time={editForm.time}
              instructions={editForm.instructions}
              onChangeName={editForm.setName}
              onChangeDosage={editForm.setDosage}
              onChangeTime={editForm.setTime}
              onChangeInstructions={editForm.setInstructions}
            />
          )}
        </Animated.View>
      </View>

      <View style={styles.footer}>
        {mode === "details" ? (
          <>
            <View style={styles.footerButton}>
              <ModalButton label="Editar" onPress={handleEditPress} variant="ghost" />
            </View>
            <View style={styles.footerButton}>
              <ModalButton label="Excluir" onPress={handleDeletePress} variant="danger" />
            </View>
          </>
        ) : (
          <>
            <View style={styles.footerButton}>
              <ModalButton label="Cancelar" onPress={handleCancel} variant="ghost" disabled={isSaving} />
            </View>
            <View style={styles.footerButton}>
              <ModalButton label="Salvar" onPress={handleSave} variant="primary" disabled={isSaving} />
            </View>
          </>
        )}
      </View>
    </Modal>
  );
}
