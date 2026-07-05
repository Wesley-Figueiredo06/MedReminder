import { View, Text, StyleSheet } from "react-native";
import { Shield } from "lucide-react-native";
import { colors as Colors } from "../../constants/colors";
import Modal from "../Modal";
import ModalButton from "../ModalButton";

type Props = {
  visible: boolean;
  onClose: () => void;
};

export default function PrivacyModal({ visible, onClose }: Props) {
  return (
    <Modal visible={visible} title="Privacidade" onClose={onClose}>
      <View style={styles.iconContainer}>
        <Shield size={25} color={Colors.success} />
      </View>
      <Text>
        Seus dados de saúde são criptografados e armazenados de forma segura. Não
        compartilhamos suas informações com terceiros.
      </Text>
      <ModalButton label="Entendi" onPress={onClose} variant="primary" />
    </Modal>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.successBorder,
  },
});