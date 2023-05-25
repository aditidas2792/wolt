import { StyleSheet, Dimensions } from 'react-native';

export const { width: screenWidth } = Dimensions.get('window');

export const colors = {
  white: '#ffffff',
  black: '#202125',
  gray: '#a1a2a4',
  green: '#5bcb02',
  grey1: '#f8f8f8',
  grey2: '#eeeeee',
  grey3: '#a1a2a4',
};

const fonts = {
  regular: 'Roboto-Regular',
  bold: 'Roboto-Bold',
  medium: 'Roboto-Medium',
};

const SE_WIDTH = 320;

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'column',
    marginBottom: 8,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 8,
    paddingTop: 8,
  },
  underline: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey2,
  },
  dayText: {
    fontFamily: fonts.bold,
    fontSize: screenWidth < SE_WIDTH ? 14 : 16,
    color: colors.black,
  },
  todayText: {
    marginLeft: 4,
    fontFamily: fonts.bold,
    fontSize: screenWidth < SE_WIDTH ? 10 : 12,
    color: colors.green,
  },
  openHoursText: {
    fontFamily: fonts.medium,
    fontSize: screenWidth < SE_WIDTH ? 14 : 16,
    color: colors.black,
  },
  closedHoursText: {
    fontFamily: fonts.medium,
    color: colors.grey3,
  },
});
