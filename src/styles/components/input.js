import {StyleSheet} from 'react-native';
import {Typography, Spacing, Colors} from '@styles/base';

/*
    This is a global stylesheet class that handles all styling
    for the different inputs.
*/

export const TxtInput = StyleSheet.create({
  inputContainer: {
    borderColor: Colors.DarkGrey,
    borderBottomWidth: 1.2,
    paddingVertical: 0,
  },
  container: {
    paddingVertical: 7,
  },
  title: {
    paddingBottom: 5,

    ...Typography.FormTitle,
  },
  placeholder: {
    ...Typography.Placeholder,
  },
});
