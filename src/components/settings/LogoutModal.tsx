import { View, Text, StyleSheet } from "react-native";
import { CircleAlert } from "lucide-react-native";
import { colors as Colors } from "../../constants/colors";
import Modal from "../Modal";
import ModalButton from "../ModalButton";

type Props = {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export default function LogoutModal({ visible, onClose, onConfirm }: Props) {
  return (
    <Modal visible={visible} title="Sair da Conta" onClose={onClose}>
      <View style={styles.iconContainer}>
        <CircleAlert size={25} color={Colors.danger} />
      </View>
      <Text style={styles.title}>Tem certeza disso?</Text>
      <Text>Você precisará fazer login novamente para acessar seus medicamentos.</Text>
      <ModalButton label="Sim, sair da conta" onPress={onConfirm} variant="danger" />
      <ModalButton label="Cancelar" onPress={onClose} variant="ghost" />
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
    backgroundColor: Colors.dangerBackground,
  },
  title: {
    fontWeight: "bold",
  },
});