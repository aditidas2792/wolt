import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export const colors = {
  white: "#ffffff",
  black: "#202125",
  gray: "#a1a2a4",
  green: "#5bcb02",
  grey1: "#f8f8f8",
  grey2: "#eeeeee",
  grey3: "#a1a2a4",
};

const fonts = {
  regular: "Roboto-Regular",
  bold: "Roboto-Bold",
  medium: "Roboto-Medium",
};

const smallScreenWidth = 350;

export const styles = StyleSheet.create({
  // Card styles
  cardContainer: {
    backgroundColor: colors.grey1,
    borderRadius: 12,
    padding: 16,
    marginVertical: 4,
    marginHorizontal: windowWidth < smallScreenWidth ? 8 : 0,
    width: "90%",
    maxWidth: 600,
    alignSelf: "center",
    shadowColor: colors.grey3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  // Fonts
  fonts: {
    "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("../../assets/fonts/Roboto-Medium.ttf"),
  },
});
