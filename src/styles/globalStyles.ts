import { StyleSheet } from "react-native";
import { globalColors } from "./colors";

const globalStyles = StyleSheet.create({
  safeArea: { height: "100%" },
  container: {
    padding: 20,
    backgroundColor: globalColors.main,
  },
});

export default globalStyles;
