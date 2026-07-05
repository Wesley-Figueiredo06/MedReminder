import { StyleSheet } from "react-native";
import type { ThemeColors } from "../constants/colors";

export const createHomeStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    conteiner: {
      flex: 1,
      backgroundColor: colors.background,
      justifyContent: "space-between",
      paddingVertical: 20,
    },

    titleContent: { fontWeight: "bold", fontSize: 20, color: colors.textPrimary },

    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 10,
      paddingBottom: 10,
      marginBottom: 25,
    },

    dateText: { color: colors.textPrimary },

    logoutIcon: {
      borderRadius: 100,
      width: 40,
      backgroundColor: colors.iconBackground,
      justifyContent: "center",
      alignItems: "center",
    },

    cards: {
      flexDirection: "row",
      justifyContent: "space-around",
    },

    cardBlue: {
      width: "45%",
      height: 150,
      padding: 20,
      justifyContent: "space-around",
      backgroundColor: colors.infoBackground,
      borderColor: colors.infoBorder,
      borderWidth: 1,
      borderRadius: 10,
    },

    cardGreen: {
      width: "45%",
      height: 150,
      padding: 20,
      justifyContent: "space-around",
      backgroundColor: colors.successBackground,
      borderColor: colors.successBorder,
      borderWidth: 1,
      borderRadius: 10,
    },

    bellIconConteiner: {
      width: 40,
      padding: 10,
      backgroundColor: colors.infoBorder,
      borderRadius: 10,
    },
    pillIconConteiner: {
      width: 40,
      padding: 10,
      backgroundColor: colors.successBorder,
      borderRadius: 10,
    },

    cardBlueIcon: { color: colors.iconActive },
    cardBlueNumber: { fontWeight: "bold", fontSize: 25, color: colors.primaryDark },
    cardBlueLabel: { color: colors.primaryAccent },

    cardGreenIcon: { color: colors.success },
    cardGreenNumber: { fontWeight: "bold", fontSize: 25, color: colors.successDark },
    cardGreenLabel: { color: colors.success },

    titleRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 20,
    },

    totalText: { color: colors.textMuted },

    emptyBox: {
      width: "95%",
      maxWidth: 400,
      height: 200,
      alignItems: "center",
      alignSelf: "center",
      justifyContent: "space-around",
      backgroundColor: colors.inputBackground,
      borderColor: colors.border,
      borderStyle: "dotted",
      borderWidth: 1.5,
      borderRadius: 10,
      padding: 20,
      marginBottom: 200,
    },
    emptyBoxText: { color: colors.textPrimary },

    footer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderTopWidth: 1,
      borderColor: colors.border,
      padding: 10,
    },
    footerItem: { alignItems: "center" },
    footerItemActive: { alignItems: "center" },
    footerLabelActive: { color: colors.primaryAccent },
    footerLabelMuted: { color: colors.iconMuted },

    addButton: {
      width: 43,
      height: 43,
      backgroundColor: colors.primary,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 100,
    },
  });
