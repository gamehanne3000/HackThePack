import React from 'react';
import {View, Text} from 'react-native';
import {AuthStyleSheet as styles} from '@styles/screens/auth';

const LoginScreen = () => {
  return (
    <View style={styles.globalSpace}>
      <Text style={styles.title}>Login Screen</Text>
    </View>
  );
};

export default LoginScreen;
