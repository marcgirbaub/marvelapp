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
    backgroundColor: globalColors.light,
  },
  button: {
    backgroundColor: globalColors.accent,
    padding: 12,
    alignItems: "center",
    borderRadius: 6,
  },
  buttonText: {
    color: globalColors.main,
    fontWeight: "bold",
    fontSize: 24,
    letterSpacing: 1,
  },
  buttonDisabled: {
    backgroundColor: globalColors.accentLight,
    padding: 12,
    alignItems: "center",
    borderRadius: 6,
  },
  errorContainer: { minHeight: 18 },
  errorText: {
    fontSize: 14,
    fontStyle: "italic",
    color: globalColors.error,
  },
  loginError: {
    fontSize: 20,
    alignSelf: "center",
    fontWeight: "bold",
    letterSpacing: 0.75,
    fontStyle: "italic",
    color: globalColors.error,
  },
  feedbackContainer: { marginTop: 40, minHeight: 40, justifyContent: "center" },
});

export default loginFormStyles;
