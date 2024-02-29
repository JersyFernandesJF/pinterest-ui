import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray[800],
  },
  content: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
  },
  tittle: {
    fontFamily: theme.fontFamily.medium,
    fontSize: 18,
    flex: 1,
    textAlign: "center",
    marginRight: 24,
    color: theme.colors.white,
  },
  options: {
    justifyContent: "center",
    flexDirection: "row",
    gap: 16,
    marginTop: 32,
  },
});
