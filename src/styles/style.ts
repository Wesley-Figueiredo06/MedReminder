import { StyleSheet } from "react-native";
import type { ThemeColors } from "../constants/colors";

export const createAuthStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    conteiner: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
      backgroundColor: colors.background,
    },

    formConteiner: {
      width: "100%",
      flex: 1,
      justifyContent: "space-around",
      paddingHorizontal: 15,
      backgroundColor: colors.background,
    },

    button: {
      height: 50,
      width: 300,
      marginTop: 15,
      backgroundColor: colors.primary,
      borderRadius: 10,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
    },

    buttonText: {
      color: colors.white,
    },

    text: {
      fontWeight: "bold",
    },
    tittle: { fontWeight: "bold", fontSize: 30, color: colors.textPrimary },

    paragraph: {
      alignContent: "center",
      width: 170,
      height: 100,
      marginTop: 10,
      color: colors.placeholder,
    },

    label: {
      justifyContent: "flex-start",
      width: 300,
      fontWeight: "500",
      color: colors.textPrimary,
    },

    input: {
      flex: 1,
      color: colors.textPrimary,
      paddingVertical: 12,
      marginLeft: 9,
    },
    link: { color: colors.primaryAccent },
    icon: {
      left: 6,
      color: colors.placeholder,
    },

    inputFocused: {
      borderColor: colors.primaryAccent,
    },

    inputContiner: {
      flexDirection: "row",
      alignItems: "center",
      width: 300,
      borderRadius: 10,
      backgroundColor: colors.inputBackground,
      borderColor: colors.placeholder,
      borderWidth: 1,
    },
    dropDownPickerStyle: {
      width: 180,
      height: 50,
    },

    inputNewMedication: {
      width: "95%",
      height: 60,
      padding: 5,
      borderRadius: 15,
      backgroundColor: colors.inputBackground,
      borderColor: colors.placeholder,
      borderWidth: 0.5,
    },

    logoContainer: {
      width: 80,
      height: 80,
      backgroundColor: colors.primary,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 20,
    },

    errorText: {
      color: colors.errorText,
      marginBottom: 10,
    },

    headerRow: {
      width: "100%",
      flexDirection: "row",
      gap: 15,
      alignItems: "center",
      marginBottom: 30,
    },

    backButton: {
      padding: 8,
      backgroundColor: colors.inputBackground,
      borderRadius: 100,
    },

    sectionTitle: {
      fontSize: 20,
      fontWeight: "500",
      color: colors.textPrimary,
    },

    fieldRow: {
      flexDirection: "row",
      gap: 10,
      zIndex: 10,
    },

    fieldRowItem: {
      flex: 1,
      zIndex: 10,
    },

    frequencyLabelRow: {
      width: "50%",
      flexDirection: "row",
      gap: 5,
    },

    frequencyIcon: {
      top: 2,
    },

    frequencyLabelText: {
      width: "auto",
      marginBottom: 5,
      fontWeight: "500",
      color: colors.textPrimary,
    },

    infoBox: {
      width: "100%",
      marginTop: 10,
      padding: 20,
      height: 80,
      backgroundColor: colors.infoBackground,
      borderColor: colors.infoBorder,
      borderRadius: 15,
      borderWidth: 1,
      marginBottom: 70,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
    },

    infoIconWrapper: {
      bottom: 10,
      alignSelf: "flex-start",
      paddingLeft: 10,
      paddingTop: 20,
    },

    infoText: {
      color: colors.infoText,
      fontSize: 13,
    },

    saveButtonWrapper: {
      width: "100%",
      marginBottom: 10,
    },

    saveButton: {
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: 50,
      backgroundColor: colors.primary,
      borderRadius: 10,
    },

    saveButtonText: {
      fontWeight: "bold",
      color: colors.white,
      fontSize: 20,
    },
  });
