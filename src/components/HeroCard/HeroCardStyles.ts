import { StyleSheet } from "react-native";
import { globalColors } from "../../styles/colors";

const heroCardStyles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: globalColors.light,
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
    paddingBottom: 20,

    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  secondaryText: { fontSize: 18, textAlign: "center" },
});

export default heroCardStyles;
