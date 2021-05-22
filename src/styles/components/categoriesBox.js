import {StyleSheet} from 'react-native';
import {Typography, Colors, Spacing, Shadow} from '@styles/base';

/*
    This is a global stylesheet class that handles all styling
    concerning the different category boxes.
*/

export const CategoriesBoxStyleSheet = StyleSheet.create({
  // Category section in home screen
  categorylistElement: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 15,
    paddingTop: 0,
    ...Spacing.GlobalSpacing,
    backgroundColor: Colors.Lightgrey,
  },
  categoryButton: {
    ...Shadow.One,
    height: 90,
    width: '100%',
    borderRadius: 15,
    backgroundColor: Colors.Background,
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryIconWrapper: {
    borderRadius: 50,
  },
  categoryIcon: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginLeft: 5,
  },
  categoryTitle: {
    ...Typography.BigButtonText,
    marginLeft: 40,
  },

  // CategoryDetail screen
  categoryDetailIcon: {
    width: 120,
    height: 80,
    resizeMode: 'contain',
    marginLeft: 5,
  },
});
