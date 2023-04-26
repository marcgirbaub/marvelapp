import { StyleSheet } from "react-native";
import { globalColors } from "../../styles/colors";

const heroesListStyles = StyleSheet.create({
  gap: { height: 30 },
  list: { paddingBottom: 20 },
  errorText: { fontSize: 20, alignSelf: "center", letterSpacing: 0.75 },
  infiniteLoader: {
    marginVertical: 20,
    position: "absolute",
    zIndex: 1,
    borderRadius: 50,
    bottom: 20,
    left: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollButton: {
    height: 60,
    width: 60,
    position: "absolute",
    zIndex: 1,
    backgroundColor: globalColors.accent,
    borderRadius: 50,
    bottom: 20,
    right: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollButtonText: {
    textAlign: "center",
    color: globalColors.main,
    fontWeight: "bold",
  },
});

export default heroesListStyles;
