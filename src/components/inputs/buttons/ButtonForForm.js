import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {ButtonForFormStyleSheet as styles} from '@styles/components/button';

export const ButtonForForm = ({title, onPress, ...props}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
      <Text style={styles.btnValue}>{title}</Text>
    </TouchableOpacity>
  );
};
