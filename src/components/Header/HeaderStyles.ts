import { StyleSheet } from "react-native";
import { globalColors } from "../../styles/colors";

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
});

export default headerStyles;
