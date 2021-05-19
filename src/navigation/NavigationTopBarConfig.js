import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
  View,
} from 'react-native';

// assets
import Logo from '@assets/hackThePack.png';
import QR from '@assets/qr-code-nav.png';

// Stack
export const Stack = createStackNavigator();

const sharedStyle = {
  headerStyle: {
    backgroundColor: 'white',
    borderBottomWidth: 0,
    height: Platform.OS === 'android' ? 70 : 100,
  },
  animationEnabled: false,
  headerTitleAlign: 'center',
};

export const screenOptions = ({navigation}) => {
  return {
    ...sharedStyle,
    headerTitle: () => {
      return (
        <View
          style={
            Platform.OS === 'android' ? styles.androidItems : styles.appleItems
          }>
          <Image source={Logo} style={styles.logo} />
        </View>
      );
    },
    headerRight: () => {
      return (
        <TouchableOpacity
          style={
            Platform.OS === 'android' ? styles.androidItems : styles.appleItems
          }
          onPress={() => navigation.navigate('qr-scanner')}>
          <Image source={QR} style={styles.QR} />
        </TouchableOpacity>
      );
    },
  };
};

export const authOptions = () => {
  return {
    ...sharedStyle,
    headerTitle: () => {
      return (
        <View
          style={
            Platform.OS === 'android' ? styles.androidItems : styles.appleItems
          }>
          <Image source={Logo} style={styles.logo} />
        </View>
      );
    },
  };
};

const styles = StyleSheet.create({
  androidItems: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  appleItems: {
    paddingBottom: 10,
    paddingRight: 5,
  },
  QR: {
    alignItems: 'center',
    marginRight: 10,
  },
  logo: {
    alignItems: 'center',
    marginRight: 10,
    width: 85,
    flex: 1,
    marginLeft: 23,
    marginTop: 10,
    marginBottom: 10,
  },
});
