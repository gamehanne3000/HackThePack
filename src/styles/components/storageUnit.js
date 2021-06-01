import {StyleSheet, Dimensions} from 'react-native';
import {Spacing, Colors, Shadow, Typography} from '@styles/base';

/*
    This is a global stylesheet handles the styling for
    each box represented as an category in homeScreen and
    the unitDetail box when altering between all the boxes
    off a certain category.

    But it also takes care of the styling
    concerning the layout of each storage units. Meaning
    every item that are saved in corresponding unit.

*/

const screenWidth = Dimensions.get('window').width;

const shareButton = {
  ...Shadow.One,
  width: '100%',
  borderRadius: 15,
  backgroundColor: Colors.Background,
  flexDirection: 'row',
  alignItems: 'center',
};

export const unitStyleSheet = StyleSheet.create({
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
    ...shareButton,
    height: 90,
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

  // sub units section in unitDetail screen
  unitDetailIcon: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginLeft: 15,
  },

  // list item section in storage-unit screen
  listItemButton: {
    ...shareButton,
    height: 70,
  },
  listElement: {
    padding: 0,
    paddingBottom: 15,
    margin: 0,
    backgroundColor: Colors.Lightgrey,
  },
  camera: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  listContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
  },
  actionWrapper: {
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  listItemTitle: {
    ...Typography.mFontSize(21),
    ...Typography.Font.Bold,
    marginLeft: 20,
    color: Colors.DarkGrey,
  },
  subtitle: {
    ...Typography.mFontSize(15),
    ...Typography.Font.Regular,
    marginLeft: 20,
    maxWidth: 140,
    lineHeight: 18,
  },
  removeBtn: {
    width: 55,
    height: 55,
    marginTop: 10,
  },
});

export const modalStyleSheet = StyleSheet.create({
  centeredView: {
    ...Spacing.AlignToCenter,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: Colors.Lightgrey,
    borderRadius: 20,
    padding: 35,
    width: screenWidth - 80,
    ...Shadow.one,
  },
  buttonWrapper: {
    ...Spacing.AlignTextToCenter,
  },
  button: {
    borderRadius: 12,
    padding: 13,
    elevation: 2,
    marginTop: 20,
    width: 150,
  },
  textStyle: {
    color: Colors.Lightgrey,
    ...Typography.Font.Bold,
    ...Typography.mFontSize(20),
    textAlign: 'center',
  },
  withBlueBackground: {
    backgroundColor: Colors.Blue,
  },
  withYellowBackground: {
    backgroundColor: Colors.Orange,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  warning: {
    color: Colors.Red,
    ...Typography.Font.Bold,
  },
  updateBtn: {
    width: 55,
    height: 55,
    marginTop: 10,
  },
});
