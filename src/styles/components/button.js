import {StyleSheet} from 'react-native';
import {Typography, Colors, Spacing, Shadow} from '@styles/base';

/*
    This is a global stylesheet class that handles all styling
    concerning the buttons.
*/

export const ButtonForForm = StyleSheet.create({
  btnContainer: {
    backgroundColor: Colors.Orange,
    width: 200,
    height: 60,
    ...Spacing.AlignTextToCenter,
    borderRadius: 15,
    ...Shadow.One,
  },
  btnValue: {
    ...Typography.Font.Bold,
    color: Colors.DarkGrey,
    ...Typography.mFontSize(25),
  },
});
export const Button = StyleSheet.create({});
export const ButtonToCreateAList = StyleSheet.create({});
export const ButtonToAddItem = StyleSheet.create({});
