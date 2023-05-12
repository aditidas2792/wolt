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

export const styles = {
  // Card styles
  cardContainer: {
    backgroundColor: colors.grey1,
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    width: "70%",
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

  // Row styles
  row: {
    flexDirection: "column",
    marginBottom: 8,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 8,
    paddingTop: 8,
  },
  underline: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey2,
  },

  // Day styles
  dayText: {
    fontFamily: fonts.bold,
    fontSize: 16,
    color: colors.black,
  },
  todayText: {
    marginLeft: 4,
    fontFamily: fonts.bold,
    fontSize: 12,
    color: colors.green,
  },

  // Hours styles
  openHoursText: {
    fontFamily: fonts.medium,
    fontSize: 16,
    color: colors.black,
  },
  closedHoursText: {
    fontFamily: fonts.medium,
    color: colors.grey3,
  },

  // Fonts
  fonts: {
    "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("../../assets/fonts/Roboto-Medium.ttf"),
  },
};
