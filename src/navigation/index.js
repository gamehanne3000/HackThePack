/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';

// stackScreens
import AuthStackScreen from './AuthStackScreen';
import RootStackScreen from './RootStackScreen';

export function Navbar() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  // eslint-disable-next-line no-shadow
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  /*
    When app is loading the program will check against Firebase
    with help of the auth().onAuthStateChanged() if user has an account
    already logged in or if the user even has an account from first place.
  */
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // stop the hook
  if (initializing) {
    return null;
  }

  // User does not have authority to acces the app yet
  if (!user) {
    return <AuthStackScreen />;
  }

  // User has the required authority
  return <RootStackScreen />;
}
