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
  gap: { width: 20 },
  comicContainer: { width: 210 },
  comicsSection: { alignItems: "center", justifyContent: "center" },
  comicImage: { width: "100%", height: 319, marginBottom: 8 },
  comicTitle: { fontSize: 16, textAlign: "center" },
  comicsList: { paddingBottom: 20 },
  skeletonContainer: {
    flexDirection: "row",
    overflow: "scroll",
  },
  skeleton: {
    backgroundColor: globalColors.grey,
    width: 210,
    height: 319,
    marginRight: 20,
  },
});

export default heroDetailScreenStyles;
