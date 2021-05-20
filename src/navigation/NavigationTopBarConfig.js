import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import {
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
  View,
  Alert,
} from 'react-native';

// assets
import Logo from '@assets/hackThePack.png';
import QR from '@assets/qr-code-nav.png';

// Stack
export const Stack = createStackNavigator();

// minimising the config code for the different navbars as they share the same code.
const sharedStyle = {
  headerStyle: {
    backgroundColor: 'white',
    borderBottomWidth: 0,
    height: Platform.OS === 'android' ? 70 : 110,
  },
  animationEnabled: false,
  headerTitleAlign: 'center',
};

/*
  Top navbar config after user has been authenticated
*/
export const screenOptions = ({navigation}) => {
  return {
    ...sharedStyle,
    headerTitle: () => {
      return (
        <View
          style={
            Platform.OS === 'android' ? styles.androidItems : styles.appleItems
          }>
          <TouchableOpacity
            onPress={() =>
              Alert.alert('Sign out', 'Are you sure', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {
                  text: 'sign out',
                  onPress: () => auth().signOut(),
                },
              ])
            }>
            <Image source={Logo} style={styles.logo} />
          </TouchableOpacity>
        </View>
      );
    },
    headerRight: () => {
      return (
        <TouchableOpacity
          style={
            Platform.OS === 'android' ? styles.androidItems : styles.appleItems
          }
          onPress={() => navigation.navigate('qr-camera')}>
          <Image source={QR} style={styles.QR} />
        </TouchableOpacity>
      );
    },
  };
};

/*
  Top navbar config before user has been authenticated
*/
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
