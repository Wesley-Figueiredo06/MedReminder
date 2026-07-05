import { Text, TextInput, StyleSheet } from "react-native";
import { colors as Colors } from "../../constants/colors";
import { useFeedbackForm } from "../../hooks/useFeedbackForm";
import Modal from "../Modal";
import ModalButton from "../ModalButton";

type Props = {
  visible: boolean;
  onClose: () => void;
};

export default function FeedbackModal({ visible, onClose }: Props) {
  const { message, setMessage, error, canSubmit, handleSubmit } = useFeedbackForm(onClose);

  return (
    <Modal visible={visible} title="Seu Feedback" onClose={onClose}>
      <Text>Sua opinião ajuda a melhorar o MedRemind para todos!</Text>
      <TextInput
        style={styles.input}
        multiline
        placeholder="Conte-nos sua experiência..."
        placeholderTextColor={Colors.placeholder}
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

const styles = StyleSheet.create({
  input: {
    height: 128,
    backgroundColor: Colors.backgroundLight,
    borderRadius: 12,
    padding: 15,
    textAlignVertical: "top",
  },
  error: {
    color: Colors.danger,
  },
});