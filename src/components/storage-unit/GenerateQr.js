/*
    Display the correct qr-code of the respective unit.
        * the underlaying information from the Qr-code are retreived based on the collection id
            for that particurarly collection.
            - when manually or scanned by the qr-code the id are the same for easier management

    If pressed the user are navigated to a new Screen for the abilty to store the qr-code. This
    gives the user all the possibiltites to do what they want in terms of printing / sharing the
    image.
*/
import React from 'react';
import {View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {Colors} from '@styles/base';

const GeneratQr = ({icon, DetailUnit}) => {
  return (
    <View>
      <QRCode
        value="remove"
        logo={icon}
        logoSize={100}
        logoBackgroundColor="transparent"
        size={300}
        backgroundColor={Colors.Lightgrey}
        quietZone={30}
        onError={error => console.log('Problem to generate QR: ', error)}
      />
    </View>
  );
};

export default GeneratQr;
