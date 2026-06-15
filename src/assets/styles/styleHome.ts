import { StyleSheet } from "react-native";

const color = {
  primaryColor: "#155DFC",
  innerInputColor: "#F9FAFB",
  placeholderLoginColor: "#99A1AF",
  bellBackground: "#EFF6FF",
  shadowBellBackground: "#DBEAFE",
};

export const style = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
    paddingVertical: 40,
  },

  titleContent: { fontWeight: "bold", fontSize: 20 },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },

  logoutIcon: {
    borderRadius: 100,
    width: 40,
    backgroundColor: "#F3F4F6",
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
    backgroundColor: "#EFF6FF",
    borderColor: "#DBEAFE",
    borderWidth: 1,
    borderRadius: 10,
  },

  cardGreen: {
    width: "45%",
    height: 150,
    padding: 20,
    justifyContent: "space-around",
    backgroundColor: "#ECFDF5",
    borderColor: "#D0FAE5",
    borderWidth: 1,
    borderRadius: 10,
  },

  bellIconConteiner: {
    width: 40,
    padding: 10,
    backgroundColor: "#DBEAFE",
    borderRadius: 10,
  },
  pillIconConteiner: {
    width: 40,
    padding: 10,
    backgroundColor: "#D0FAE5",
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
    backgroundColor: "#F9FAFB",
    borderColor: "#E5E7EB",
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
    borderColor: "#E5E7EB",
    padding: 10,
  },
});
