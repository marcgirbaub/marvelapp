import { StyleSheet } from "react-native";
import { globalColors } from "../../styles/colors";

const heroDetailScreenStyles = StyleSheet.create({
  imageContainer: { width: "100%", height: 340, marginBottom: 10 },
  image: { width: "100%", height: "100%", borderRadius: 20 },
  heroName: { fontWeight: "bold", fontSize: 40, marginBottom: 10 },
  description: { fontSize: 18, letterSpacing: 0.75, marginBottom: 20 },
  noDescription: {
    fontSize: 16,
    fontStyle: "italic",
    letterSpacing: 0.75,
    marginBottom: 20,
  },
  comicsTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 2,
  },
  comicsTitleContainer: {
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor: globalColors.grey,
    marginBottom: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  comicsSection: { alignItems: "center", justifyContent: "center" },
});

export default heroDetailScreenStyles;
