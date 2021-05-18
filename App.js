import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import HomeScreen from '@screens/HomeScreen';

export default function App() {
  const Stack = createStackNavigator();
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="About" component={aboutScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
