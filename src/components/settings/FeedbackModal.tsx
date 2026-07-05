import { Text, TextInput, StyleSheet } from "react-native";
import { useThemedStyles } from "../../hooks/useThemedStyles";
import { useTheme } from "../../contexts/ThemeContext";
import type { ThemeColors } from "../../constants/colors";
import { useFeedbackForm } from "../../hooks/useFeedbackForm";
import Modal from "../Modal";
import ModalButton from "../ModalButton";

type Props = {
  visible: boolean;
  onClose: () => void;
};

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    text: {
      color: colors.textPrimary,
    },
    input: {
      height: 128,
      backgroundColor: colors.backgroundLight,
      borderRadius: 12,
      padding: 15,
      textAlignVertical: "top",
      color: colors.textPrimary,
    },
    error: {
      color: colors.danger,
    },
  });

export default function FeedbackModal({ visible, onClose }: Props) {
  const { message, setMessage, error, canSubmit, handleSubmit } = useFeedbackForm(onClose);
  const styles = useThemedStyles(createStyles);
  const { colors } = useTheme();

  return (
    <Modal visible={visible} title="Seu Feedback" onClose={onClose}>
      <Text style={styles.text}>Sua opinião ajuda a melhorar o MedRemind para todos!</Text>
      <TextInput
        style={styles.input}
        multiline
        placeholder="Conte-nos sua experiência..."
        placeholderTextColor={colors.placeholder}
        value={message}
        onChangeText={setMessage}
      />
      {error && <Text style={styles.error}>{error}</Text>}
      <ModalButton
        label="Enviar Feedback"
        onPress={handleSubmit}
        variant="primary"
        disabled={!canSubmit}
      />
    </Modal>
  );
}
