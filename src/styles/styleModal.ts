import { StyleSheet } from "react-native";
import { colors as Colors } from "../constants/colors";

const color = {
  primaryColor: Colors.primary,
  innerInputColor: Colors.inputBackground,
  placeholderLoginColor: Colors.placeholder,
};

export const style = StyleSheet.create({
  conteiner: {
    width: "100%",
    height: "auto",
    maxHeight: 400,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    zIndex: 2,
  },
});
