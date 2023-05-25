import { StyleSheet} from 'react-native';


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
  
export const styles = StyleSheet.create({
     // Title styles
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 8,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.black,
  },
  titleIcon: {
    marginRight: 8,
    color: colors.grey3,
  },
  titleText: {
    fontFamily: fonts.bold,
    fontSize: 24,
    color: colors.black,
  },
});