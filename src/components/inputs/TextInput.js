import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {TxtInput as styles} from '@styles/components/input';

export const TxtInput = ({
  password,
  title,
  value,
  onChange,
  placeholder,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.inputContainer}
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        secureTextEntry={password}
        {...props}
      />
    </View>
  );
};
