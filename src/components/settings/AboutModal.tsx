import { View, Text, StyleSheet } from "react-native";
import { Pill } from "lucide-react-native";
import { colors as Colors } from "../../constants/colors";
import Modal from "../Modal";

type Props = {
  visible: boolean;
  onClose: () => void;
};

export default function AboutModal({ visible, onClose }: Props) {
  return (
    <Modal visible={visible} title="Sobre o App" onClose={onClose}>
      <View style={styles.content}>
        <View style={styles.logo}>
          <Pill size={28} color={Colors.white} />
        </View>
        <Text style={styles.name}>MedRemind</Text>
        <Text style={styles.version}>Versão 1.0.0 (Build 2024)</Text>
        <Text style={styles.description}>
          Desenvolvido para ajudar você a nunca mais esquecer sua saúde.
        </Text>
        <View style={styles.footer}>
          <Text style={styles.footerText}>FEITO COM ❤️ POR MEDREMIND TEAM</Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  content: {
    alignItems: "center",
    gap: 8,
  },
  logo: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
  version: {
    color: Colors.secondaryText,
  },
  description: {
    textAlign: "center",
    color: Colors.secondaryText,
  },
  footer: {
    borderTopWidth: 1,
    borderColor: Colors.border,
    paddingTop: 10,
    marginTop: 8,
    width: "100%",
    alignItems: "center",
  },
  footerText: {
    fontSize: 11,
    color: Colors.secondaryText,
  },
});