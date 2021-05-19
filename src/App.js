import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Navbar} from '@navigation';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  });

  return <Navbar />;
}
