import { StyleSheet } from "react-native";
import { globalColors } from "../../styles/colors";
import globalStyles from "../../styles/globalStyles";

const headerStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: globalColors.main,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    letterSpacing: 1,
    color: globalColors.accent,
  },
  logoutButton: {
    position: "absolute",
    left: 20,
    top: "40%",
    backgroundColor: globalColors.grey,
    paddingHorizontal: 10,
    height: 30,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  logoutText: {
    fontWeight: "bold",
  },
  goBack: {
    position: "absolute",
    left: 20,
    top: "40%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    height: 30,
    borderRadius: 8,
    backgroundColor: globalColors.accentLight,
  },
  goBackText: {
    fontWeight: "bold",
    color: globalColors.main,
  },
});

export default headerStyles;
