import { View, Text, StyleSheet } from "react-native";
import { Shield } from "lucide-react-native";
import { useThemedStyles } from "../../hooks/useThemedStyles";
import { useTheme } from "../../contexts/ThemeContext";
import type { ThemeColors } from "../../constants/colors";
import Modal from "../Modal";
import ModalButton from "../ModalButton";

type Props = {
  visible: boolean;
  onClose: () => void;
};

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    iconContainer: {
      width: 48,
      height: 48,
      borderRadius: 24,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.successBorder,
    },
    text: {
      color: colors.textPrimary,
    },
  });

export default function PrivacyModal({ visible, onClose }: Props) {
  const styles = useThemedStyles(createStyles);
  const { colors } = useTheme();

  return (
    <Modal visible={visible} title="Privacidade" onClose={onClose}>
      <View style={styles.iconContainer}>
        <Shield size={25} color={colors.success} />
      </View>
      <Text style={styles.text}>
        Seus dados de saúde são criptografados e armazenados de forma segura. Não
        compartilhamos suas informações com terceiros.
      </Text>
      <ModalButton label="Entendi" onPress={onClose} variant="primary" />
    </Modal>
  );
}
