import { StyleSheet } from "react-native";
import type { ThemeColors } from "../constants/colors";

export const createModalStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    conteiner: {
      width: "100%",
      height: "auto",
      maxHeight: 400,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.5)",
      zIndex: 2,
    },
  });
