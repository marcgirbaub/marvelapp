import { StyleSheet } from "react-native";
import { globalColors } from "../../styles/colors";

const loginFormStyles = StyleSheet.create({
  inputContainer: { marginBottom: 14 },
  input: {
    letterSpacing: 1,
    borderWidth: 1,
    borderColor: globalColors.grey,
    borderRadius: 6,
    padding: 14,
    fontSize: 18,
    marginBottom: 10,
    backgroundColor: globalColors.lightColor,
  },
  button: {
    backgroundColor: globalColors.accentColor,
    padding: 12,
    alignItems: "center",
    borderRadius: 6,
  },
  buttonText: {
    color: globalColors.mainColor,
    fontWeight: "bold",
    fontSize: 24,
    letterSpacing: 1,
  },
  errorText: {
    fontSize: 14,
    fontStyle: "italic",
  },
});

export default loginFormStyles;
