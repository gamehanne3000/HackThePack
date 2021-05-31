import {StyleSheet} from 'react-native';
import {Typography, Spacing, Colors} from '@styles/base';

/*
    This is a global stylesheet class that handles all styling
    concerning the main title for both homeScreen but also categoryScreen
*/

const border = {
  borderColor: Colors.Orange,
  borderWidth: 3,
  marginBottom: 10,
};

export const titleStyleSheet = StyleSheet.create({
  titleWrapper: {
    ...Spacing.AlignTextToCenter,
  },
  title: {
    ...Typography.mFontSize(25),
    ...Typography.Font.Bold,
    color: Colors.DarkGrey,
    marginBottom: 5,
  },
  orangeBorder: {
    ...border,
    width: '80%',
  },
  orangeBorderSmall: {
    ...border,
    width: 100,
  },
});
