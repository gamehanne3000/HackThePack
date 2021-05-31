import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {ButtonToAddItem as styles} from '@styles/components/button';
import add from '@assets/icons/add-btn.png';

export const ButtonToAddItem = ({onPress, ...props}) => {
  // Create modal with following input field
  //  * title
  //  * subtitle
  //  * finish button

  function addItem() {
    return console.log('add');
  }

  return (
    <TouchableOpacity onPress={() => addItem()}>
      <Image source={add} style={styles.btnAdd} />
    </TouchableOpacity>
  );
};
