import { StyleSheet } from "react-native";
import { colors as Colors } from "../constants/colors";

export const color = {
  primaryColor: Colors.primary,
  innerInputColor: Colors.inputBackground,
  placeholderLoginColor: Colors.placeholder,
  bellBackground: Colors.infoBackground,
  shadowBellBackground: Colors.infoBorder,
  primaryIconColor: Colors.secondaryText,
  secondaryIconColor: Colors.primary,
  dangerColor: Colors.danger,
};

export const styleSettings = StyleSheet.create({
  container: {
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

  scrollViewContainer: {
    backgroundColor: Colors.inputBackground,
    flex: 1,
    gap: 20,
    paddingBottom: 30,
    paddingTop: 15,
  },

  iconContainer: { borderRadius: 10, padding: 10, backgroundColor: Colors.iconBackground },

  iconContainerUser: {
    borderRadius: 15,
    padding: 10,
    backgroundColor: Colors.infoBorder,
  },

  iconContainerDanger: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: Colors.dangerBackground,
  },

  labelAlign: { flex: 1, paddingLeft: 10 },

  titleContent: { fontWeight: "bold", fontSize: 20 },

  textTitle: {
    color: Colors.secondaryText,
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

  containerCard: {
    backgroundColor: "white",
    borderRadius: 25,
    marginLeft: 10,
    marginRight: 10,
    borderColor: Colors.placeholder,
    borderWidth: 0.4,
    marginBottom: 10,
  },

  containerUser: {
    borderColor: Colors.placeholder,
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
    borderColor: Colors.placeholder,
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
    borderColor: Colors.border,
    padding: 10,
  },
  footerItem: {
    alignItems: "center",
  },
  logoutText: {
    color: color.dangerColor,
    fontWeight: "600",
  },
});
