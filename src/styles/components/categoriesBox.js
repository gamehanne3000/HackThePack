import {StyleSheet} from 'react-native';
import {Typography, Colors, Spacing, Shadow} from '@styles/base';

/*
    This is a global stylesheet class that handles all styling
    concerning the different category boxes.
*/

export const CategoriesBoxStyleSheet = StyleSheet.create({
  // Category section in home screen
  unitlistElement: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 15,
    paddingTop: 0,
    ...Spacing.GlobalSpacing,
    backgroundColor: Colors.Lightgrey,
  },
  unitButton: {
    ...Shadow.One,
    height: 90,
    width: '100%',
    borderRadius: 15,
    backgroundColor: Colors.Background,
    flexDirection: 'row',
    alignItems: 'center',
  },
  unitIconWrapper: {
    borderRadius: 50,
  },
  unitIcon: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  unitTitle: {
    ...Typography.BigButtonText,
    marginLeft: 20,
  },

  // unitDetail screen
  unitDetailIcon: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginLeft: 15,
  },
});
