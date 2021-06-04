import React, {useState, useEffect, useRef} from 'react';
import {View, TouchableOpacity} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {Colors} from '@styles/base';
import ViewShot, {captureRef} from 'react-native-view-shot';
import Share from 'react-native-share';

/*
    Display the correct qr-code of the respective unit.
        * the underlaying information from the Qr-code are retreived based on the databas structure.
            - when manually or scanned by the qr-code the path in firestore are the same.

    If pressed the user are navigated to a new Screen for the abilty to store the qr-code. This
    gives the user all the possibiltites to do what they want in terms of printing / sharing the
    qr-code.
*/

const GeneratQr = ({data}) => {
  const [value, setValue] = useState();
  const viewRef = useRef(); // The view i want to reference when screen capturing

  const shareQrCode = async () => {
    try {
      const uri = await captureRef(viewRef, {
        format: 'png',
        quality: 0.7,
      }).then(
        myUri => console.log('Image saved to', myUri),
        error => console.error('Oops, snapshot failed', error),
      );

      await Share.open({url: uri}).then(error => {
        console.log(error);
      });
    } catch (error) {
      console.log('shareQrCode error: ', error);
    }
  };

  const valueToQr = () => {
    // <QrCode> can only read a string, so by stringifying the object
    // i can then simply parse the object back when scanning the qr-code
    const dataStringified = JSON.stringify(data);
    setValue(dataStringified);
  };

  useEffect(() => {
    valueToQr();
  }, []);

  return (
    <View>
      <TouchableOpacity onLongPress={() => shareQrCode()}>
        <ViewShot ref={viewRef}>
          <QRCode
            value={value}
            logo={data.icon}
            logoSize={80}
            logoBackgroundColor="transparent"
            size={250}
            backgroundColor={Colors.Lightgrey}
            quietZone={30}
            onError={error => console.log('Problem to generate QR: ', error)}
          />
        </ViewShot>
      </TouchableOpacity>
    </View>
  );
};

export default GeneratQr;
