import {StyleSheet} from 'react-native';
import {Spacing, Colors} from '@styles/base';

/*
    This is a global stylesheet class that handles the
    styling for the storage unit detail screen, meaning the
    screen user se when looking after what items that are
    in the specifik unit.
*/

export const detailUnitStyleSheet = StyleSheet.create({
  noSpace: {
    ...Spacing.NoSpacing,
  },
  headerContainer: {
    backgroundColor: Colors.Blue,
    ...Spacing.AlignToCenter,
    paddingTop: 5,
  },
  itemsContainer: {
    backgroundColor: Colors.Lightgrey,
    flex: 1,
    ...Spacing.GlobalSpacing,
  },
  itemsContainerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    alignItems: 'center',
  },
});
