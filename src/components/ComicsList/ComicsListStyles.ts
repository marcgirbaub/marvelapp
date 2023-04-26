import { StyleSheet } from "react-native";
import { globalColors } from "../../styles/colors";

const comicListStyles = StyleSheet.create({
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
  comicsList: { paddingBottom: 20 },
  gap: { width: 20 },
});

export default comicListStyles;
