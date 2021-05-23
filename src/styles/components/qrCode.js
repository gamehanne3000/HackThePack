import {StyleSheet} from 'react-native';
import {Typography} from '@styles/base';

/*
    This is a global stylesheet class that handles all styling
    concerning layouts of the Qr code in the application.
*/

export const QrCodeImageGridIconStyleSheet = StyleSheet.create({
  imageWrapper: {
    alignItems: 'center',
    marginBottom: 30,
  },

  image: {
    marginRight: 11,
    marginTop: 10,
    resizeMode: 'contain',
    width: 75,
    height: 75,
  },

  title: {
    ...Typography.FormTitle,
    marginTop: 10,
    marginBottom: 5,
  },
});
export const QrCodeLargeStyleSheet = StyleSheet.create({});
