import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useThemedStyles } from "../../hooks/useThemedStyles";
import type { ThemeColors } from "../../constants/colors";
import Modal from "../Modal";

type Props = {
  visible: boolean;
  onClose: () => void;
};

const HELP_OPTIONS = ["Perguntas Frequentes", "Falar com Suporte", "Guia de Uso"];

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    text: {
      color: colors.textPrimary,
    },
    list: {
      gap: 10,
    },
    item: {
      backgroundColor: colors.backgroundLight,
      borderRadius: 12,
      padding: 15,
    },
  });

export default function HelpCenterModal({ visible, onClose }: Props) {
  const styles = useThemedStyles(createStyles);

  return (
    <Modal visible={visible} title="Central de Ajuda" onClose={onClose}>
      <Text style={styles.text}>Como podemos ajudar você hoje?</Text>
      <View style={styles.list}>
        {HELP_OPTIONS.map((option) => (
          <TouchableOpacity key={option} style={styles.item} onPress={onClose}>
            <Text style={styles.text}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Modal>
  );
}
