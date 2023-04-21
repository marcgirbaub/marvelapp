import { StyleSheet } from "react-native";
import { globalColors } from "./colors";

const globalStyles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: {
    padding: 20,
    backgroundColor: globalColors.main,
    flex: 1,
  },
});

export default globalStyles;
