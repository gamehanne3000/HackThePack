import React from 'react';
import {View, Dimensions, Linking} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

/*
  Redirect user to correct detailUnit
*/

const QrCameraScreen = ({navigation}) => {
  const onSuccess = event => {
    const dataFromQr = event.data;
    const type = isJson(dataFromQr);

    // Check if the data is a string or an object
    function isJson(item) {
      item = typeof item !== 'string' ? JSON.stringify(item) : item;

      try {
        item = JSON.parse(item);
      } catch (e) {
        return false;
      }
      // Return true
      return typeof item === 'object' && item !== null;
    }

    if (type) {
      const parsedDataFromQr = JSON.parse(dataFromQr);

      // send user to the specifik unit with the correct data
      navigation.navigate('storage-unit', {
        detailUnit: parsedDataFromQr,
      });
    } else {
      Linking.openURL(dataFromQr).catch(err =>
        console.error('An error occured', err),
      );
    }
  };

  return (
    <View>
      <QRCodeScanner
        onRead={onSuccess}
        cameraStyle={{height: Dimensions.get('window').height}}
        // flashMode={RNCamera.Constants.FlashMode.torch} // -> flashlight
      />
    </View>
  );
};

export default QrCameraScreen;
