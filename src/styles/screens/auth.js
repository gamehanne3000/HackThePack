import {StyleSheet} from 'react-native';
import {Typography, Spacing, Colors} from '@styles/base';

/*
    This is a global stylesheet class that handles all styling
    for both "Login and register" screens.
*/

export const AuthStyleSheet = StyleSheet.create({
  globalSpace: {
    ...Spacing.formSpacing,
  },
  title: {
    ...Typography.FormTitle,
  },
});
