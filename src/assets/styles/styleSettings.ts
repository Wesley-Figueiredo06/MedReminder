import { StyleSheet } from "react-native";

export const color = {
  primaryColor: "#155DFC",
  innerInputColor: "#F9FAFB",
  placeholderLoginColor: "#99A1AF",
  bellBackground: "#EFF6FF",
  shadowBellBackground: "#DBEAFE",
  primaryIconColor: "#6A7282",
  secondaryIconColor: "#155DFC",
};

export const styleStettings = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 30,
    borderBottomWidth: 0.3,
  },

  scrollViewConteinar: {
    backgroundColor: "#F9FAFB",
    flex: 1,
    gap: 20,
    paddingBottom: 30,
    paddingTop: 15,
  },

  iconContainer: { borderRadius: 10, padding: 10, backgroundColor: "#F3F4F6" },

  iconContainerUser: {
    borderRadius: 15,
    padding: 10,
    backgroundColor: "#DBEAFE",
  },

  iconContainerExg: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#FEF2F2",
  },

  labelAlign: { flex: 1, paddingLeft: 10 },

  titleContent: { fontWeight: "bold", fontSize: 20 },

  textTitle: {
    color: "#6A7282",
  },

  label: {
    fontWeight: "500",
  },

  textLabelContent: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 20,
    color: color.primaryIconColor,
    fontWeight: "600",
  },

  conteinerCard: {
    backgroundColor: "white",
    borderRadius: 25,
    marginLeft: 10,
    marginRight: 10,
    borderColor: "#99A1AF",
    borderWidth: 0.4,
    marginBottom: 10,
  },

  conteinerUser: {
    borderColor: "#99A1AF",
    borderWidth: 0.4,
    margin: 10,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "white",
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
    borderColor: "#99A1AF",
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
    borderColor: "#E5E7EB",
    padding: 10,
  },
});
