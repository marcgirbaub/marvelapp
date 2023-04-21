import { StyleSheet } from "react-native";
import { globalColors } from "../../styles/colors";

const heroCardStyles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: globalColors.light,
    height: 400,
  },
  imageContainer: { width: "100%", height: 330 },
  image: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  infoContainer: {
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: { fontSize: 34, fontWeight: "bold" },
  secondaryText: { fontSize: 16 },
});

export default heroCardStyles;
