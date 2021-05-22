import {StyleSheet} from 'react-native';
import {Typography, Spacing, Colors} from '@styles/base';

/*
    This is a global stylesheet class that handles all styling
    for both "Login, register and create" screens.
*/

export const FormStyleSheet = StyleSheet.create({
  globalSpace: {
    ...Spacing.FormSpacing,
  },
  alignTitle: {
    ...Spacing.AlignTextToCenter,
    paddingVertical: 40,
  },
  alignButton: {
    ...Spacing.AlignTextToCenter,
    paddingTop: 50,
  },
  mainTitle: {
    ...Typography.MainTitle,
  },
  title: {
    ...Typography.FormTitle,
  },

  // specific for login page
  registerTextWrapper: {
    flexDirection: 'row',
    ...Spacing.AlignTextToCenter,
    paddingTop: 30,
  },
  registerText: {
    ...Typography.Font.Regular,
    color: Colors.DarkGrey,
    ...Typography.mFontSize(17),
  },
  registerTextClickable: {
    ...Typography.Font.Bold,
    color: Colors.Blue,
    ...Typography.mFontSize(17),
  },
});
