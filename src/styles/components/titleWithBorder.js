import {StyleSheet} from 'react-native';
import {Typography, Spacing, Colors} from '@styles/base';

/*
    This is a global stylesheet class that handles all styling
    concerning the main title for both homeScreen but also categoryScreen
*/

export const titleStyleSheet = StyleSheet.create({
  titleWrapper: {
    ...Spacing.AlignTextToCenter,
    paddingVertical: 10,
  },
  title: {
    ...Typography.mFontSize(25),
    ...Typography.Font.Bold,
    color: Colors.DarkGrey,
    marginBottom: 5,
  },
  orangeBorder: {
    borderColor: Colors.Orange,
    borderWidth: 3,
    width: '80%',
    marginBottom: 10,
  },
});
