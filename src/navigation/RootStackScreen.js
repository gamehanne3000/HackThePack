import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Stack, screenOptions} from './NavigationTopBarConfig';

// Screens
import HomeScreen from '@screens/HomeScreen';
import QrCameraScreen from '@screens/QrCameraScreen';
import CategoriesDetailScreen from '@screens/CategoriesDetailScreen';
import CreateUnitScreen from '@screens/CreateUnitScreen';
import PrintQrScreen from '@screens/PrintQrScreen';
import StorageUnitScreen from '@screens/StorageUnitScreen';

const RootStackScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="home-page" component={HomeScreen} />
        <Stack.Screen name="qr-camera" component={QrCameraScreen} />
        <Stack.Screen
          name="category-details"
          component={CategoriesDetailScreen}
        />
        <Stack.Screen name="create-a-unit" component={CreateUnitScreen} />
        <Stack.Screen name="print-qr" component={PrintQrScreen} />
        <Stack.Screen name="storage-unit" component={StorageUnitScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackScreen;
