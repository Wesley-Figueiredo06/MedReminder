import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors as Colors } from "../../constants/colors";
import Modal from "../Modal";

type Props = {
  visible: boolean;
  onClose: () => void;
};

const HELP_OPTIONS = ["Perguntas Frequentes", "Falar com Suporte", "Guia de Uso"];

export default function HelpCenterModal({ visible, onClose }: Props) {
  return (
    <Modal visible={visible} title="Central de Ajuda" onClose={onClose}>
      <Text>Como podemos ajudar você hoje?</Text>
      <View style={styles.list}>
        {HELP_OPTIONS.map((option) => (
          <TouchableOpacity key={option} style={styles.item} onPress={onClose}>
            <Text>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: 10,
  },
  item: {
    backgroundColor: Colors.backgroundLight,
    borderRadius: 12,
    padding: 15,
  },
});