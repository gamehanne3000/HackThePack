import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Stack, screenOptions} from './NavigationTopBarConfig';

//stacks
import HomeScreen from '@screens/HomeScreen';
import QrCameraScreen from '@screens/QrCameraScreen';

export const Navbar = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Home-page" component={HomeScreen} />
        <Stack.Screen name="qr-scanner" component={QrCameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
