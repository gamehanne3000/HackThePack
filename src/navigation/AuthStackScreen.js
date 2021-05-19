import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Stack, authOptions} from './NavigationTopBarConfig';

// auth / Screens
import LoginScreen from '@screens/auth/LoginScreen';
import RegisterScreen from '@screens/auth/RegisterScreen';

const AuthStackScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={authOptions}>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStackScreen;
