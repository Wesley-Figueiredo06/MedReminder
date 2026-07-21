import React from "react";
import { View, Text, Modal as RNModal, TouchableOpacity, StyleSheet } from "react-native";
import { X } from "lucide-react-native";
import { useThemedStyles } from "../hooks/useThemedStyles";
import { useTheme } from "../contexts/ThemeContext";
import type { ThemeColors } from "../constants/colors";

type Props = {
  visible: boolean;
  title: React.ReactNode;
  onClose: () => void;
  children: React.ReactNode;
};

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.6)",
      justifyContent: "center",
      alignItems: "center",
    },
    card: {
      width: "90%",
      maxWidth: 350,
      backgroundColor: colors.surface,
      borderRadius: 20,
      padding: 20,
      gap: 16,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      color: colors.textPrimary,
    },
  });

export default function Modal({ visible, title, onClose, children }: Props) {
  const styles = useThemedStyles(createStyles);
  const { colors } = useTheme();

  return (
    <RNModal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.card}>
          <View style={styles.header}>
            {typeof title === "string" ? (
              <Text style={styles.title}>{title}</Text>
            ) : (
              title
            )}
            <TouchableOpacity onPress={onClose}>
              <X size={22} color={colors.iconMuted} />
            </TouchableOpacity>
          </View>
          {children}
        </View>
      </View>
    </RNModal>
  );
}
