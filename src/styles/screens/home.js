import {StyleSheet, Dimensions} from 'react-native';
import {Typography, Spacing, Colors} from '@styles/base';

/*
    This is a global stylesheet class that handles the
    styling for the initial route -> ('home')
*/

const screenWidth = Dimensions.get('window').width;

export const HomeStyleSheet = StyleSheet.create({
  globalSpace: {
    ...Spacing.GlobalSpacing,
  },
  noSpace: {
    ...Spacing.GlobalSpacing,
  },
  headerContainer: {
    backgroundColor: Colors.Blue,
    ...Spacing.AlignToCenter,
    paddingTop: 5,
  },
  categoriesContainer: {
    backgroundColor: Colors.Background,
    flex: 1,
  },
  headerContentWrapper: {
    flexDirection: 'row',
    backgroundColor: Colors.DarkBlue,
    width: screenWidth,
    height: 70,
    ...Spacing.AlignTextToCenter,
  },
  headerTextContent: {
    color: Colors.Orange,
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  title: {
    ...Typography.mFontSize(20),
    ...Typography.Font.Bold,
    color: Colors.Orange,
  },
  subTitle: {
    ...Typography.mFontSize(15),
    ...Typography.Font.Regular,
    color: Colors.Orange,
  },
});
