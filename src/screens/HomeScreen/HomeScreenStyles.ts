import { StyleSheet } from "react-native";
import { globalColors } from "../../styles/colors";

const homeScreenStyles = StyleSheet.create({
  skeleton: {
    width: "100%",
    height: 432,
    backgroundColor: globalColors.light,
    borderRadius: 20,
    marginBottom: 30,
  },
});

export default homeScreenStyles;
