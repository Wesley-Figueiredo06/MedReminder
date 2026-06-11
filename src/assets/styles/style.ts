import { Bold } from "lucide-react-native";
import { StyleSheet } from "react-native";

const color = {
  primaryColor: "#155DFC",
  innerInputColor: "#F9FAFB",
  placeholderLoginColor: "#99A1AF",
};

export const style = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  button: {
    height: 50,
    width: 300,
    marginTop: 15,
    backgroundColor: color.primaryColor,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  text: {
    fontWeight: "bold",
  },
  tittle: { fontWeight: "bold", fontSize: 30 },

  paragraph: {
    alignContent: "center",
    width: 170,
    height: 100,
    marginTop: 10,
    color: color.placeholderLoginColor,
  },

  label: {
    justifyContent: "flex-start",
    width: 300,
    fontWeight: "500",
  },

  input: {
    flex: 1,
    color: color.placeholderLoginColor,
    paddingVertical: 12,
    marginLeft: 9,
  },
  link: { color: color.primaryColor },
  icon: {
    left: 6,
    color: color.placeholderLoginColor,
  },

  inputFocused: {
    borderColor: color.primaryColor,
  },

  inputContiner: {
    flexDirection: "row",
    alignItems: "center",
    width: 300,
    borderRadius: 10,
    backgroundColor: color.innerInputColor,
    borderColor: color.placeholderLoginColor,
    borderWidth: 1,
  },
});
