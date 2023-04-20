import { StyleSheet } from "react-native";
import { globalColors } from "../../styles/colors";

const loginScreenStyles = StyleSheet.create({
  contentContainer: { justifyContent: "center", height: "100%" },
  title: {
    color: globalColors.accent,
    fontSize: 56,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 60,
  },
});

export default loginScreenStyles;
