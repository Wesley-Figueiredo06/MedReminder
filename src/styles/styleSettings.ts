import { StyleSheet } from "react-native";
import type { ThemeColors } from "../constants/colors";

export const createSettingsStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      justifyContent: "space-between",
      paddingVertical: 20,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 20,
      paddingBottom: 30,
      borderBottomWidth: 0.3,
      borderColor: colors.border,
    },

    scrollViewContainer: {
      backgroundColor: colors.inputBackground,
      flex: 1,
      gap: 20,
      paddingBottom: 30,
      paddingTop: 15,
    },

    iconContainer: {
      borderRadius: 10,
      padding: 10,
      backgroundColor: colors.iconBackground,
    },

    iconContainerUser: {
      borderRadius: 15,
      padding: 10,
      backgroundColor: colors.infoBorder,
    },

    iconContainerDanger: {
      borderRadius: 10,
      padding: 10,
      backgroundColor: colors.dangerBackground,
    },

    labelAlign: { flex: 1, paddingLeft: 10 },

    titleContent: { fontWeight: "bold", fontSize: 20, color: colors.textPrimary },

    textTitle: {
      color: colors.secondaryText,
    },

    label: {
      fontWeight: "500",
      color: colors.textPrimary,
    },

    textLabelContent: {
      flex: 1,
      flexDirection: "row",
      marginLeft: 20,
      color: colors.iconMuted,
      fontWeight: "600",
    },

    containerCard: {
      backgroundColor: colors.surface,
      borderRadius: 25,
      marginLeft: 10,
      marginRight: 10,
      borderColor: colors.placeholder,
      borderWidth: 0.4,
      marginBottom: 10,
    },

    containerUser: {
      borderColor: colors.placeholder,
      borderWidth: 0.4,
      margin: 10,
      padding: 10,
      marginLeft: 10,
      marginRight: 10,
      backgroundColor: colors.surface,
      borderRadius: 25,
      justifyContent: "center",
      alignContent: "center",
    },

    cards: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      padding: 15,
    },
    cardsMiddle: {
      borderColor: colors.placeholder,
      borderTopWidth: 0.2,
      borderBottomWidth: 0.2,
    },
    cardUser: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      padding: 15,
      borderRadius: 15,
    },
    footer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderTopWidth: 1,
      borderColor: colors.border,
      padding: 10,
    },
    footerItem: {
      alignItems: "center",
    },
    logoutText: {
      color: colors.danger,
      fontWeight: "600",
    },
  });
