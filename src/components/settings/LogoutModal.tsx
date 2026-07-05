import { View, Text, StyleSheet } from "react-native";
import { CircleAlert } from "lucide-react-native";
import { useThemedStyles } from "../../hooks/useThemedStyles";
import { useTheme } from "../../contexts/ThemeContext";
import type { ThemeColors } from "../../constants/colors";
import Modal from "../Modal";
import ModalButton from "../ModalButton";

type Props = {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    iconContainer: {
      width: 48,
      height: 48,
      borderRadius: 24,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.dangerBackground,
    },
    title: {
      fontWeight: "bold",
      color: colors.textPrimary,
    },
    text: {
      color: colors.textPrimary,
    },
  });

export default function LogoutModal({ visible, onClose, onConfirm }: Props) {
  const styles = useThemedStyles(createStyles);
  const { colors } = useTheme();

  return (
    <Modal visible={visible} title="Sair da Conta" onClose={onClose}>
      <View style={styles.iconContainer}>
        <CircleAlert size={25} color={colors.danger} />
      </View>
      <Text style={styles.title}>Tem certeza disso?</Text>
      <Text style={styles.text}>
        Você precisará fazer login novamente para acessar seus medicamentos.
      </Text>
      <ModalButton label="Sim, sair da conta" onPress={onConfirm} variant="danger" />
      <ModalButton label="Cancelar" onPress={onClose} variant="ghost" />
    </Modal>
  );
}
