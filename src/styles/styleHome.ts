import { StyleSheet } from "react-native";
import { colors as Colors } from "../constants/colors";

const color = {
  primaryColor: Colors.primary,
  innerInputColor: Colors.inputBackground,
  placeholderLoginColor: Colors.placeholder,
  bellBackground: Colors.infoBackground,
  shadowBellBackground: Colors.infoBorder,
};

export const style = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
    paddingVertical: 20,
  },

  titleContent: { fontWeight: "bold", fontSize: 20 },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingBottom: 10,
    marginBottom: 25,
  },

  logoutIcon: {
    borderRadius: 100,
    width: 40,
    backgroundColor: Colors.iconBackground,
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
    backgroundColor: Colors.infoBackground,
    borderColor: Colors.infoBorder,
    borderWidth: 1,
    borderRadius: 10,
  },

  cardGreen: {
    width: "45%",
    height: 150,
    padding: 20,
    justifyContent: "space-around",
    backgroundColor: Colors.successBackground,
    borderColor: Colors.successBorder,
    borderWidth: 1,
    borderRadius: 10,
  },

  bellIconConteiner: {
    width: 40,
    padding: 10,
    backgroundColor: Colors.infoBorder,
    borderRadius: 10,
  },
  pillIconConteiner: {
    width: 40,
    padding: 10,
    backgroundColor: Colors.successBorder,
    borderRadius: 10,
  },

  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },

  emptyBox: {
    width: "95%",
    maxWidth: 400,
    height: 200,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-around",
    backgroundColor: Colors.inputBackground,
    borderColor: Colors.border,
    borderStyle: "dotted",
    borderWidth: 1.5,
    borderRadius: 10,
    padding: 20,
    marginBottom: 200,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: Colors.border,
    padding: 10,
  },
});
