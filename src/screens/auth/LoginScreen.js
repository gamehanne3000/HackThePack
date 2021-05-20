import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {AuthStyleSheet as styles} from '@styles/screens/auth';
import {TxtInput} from '@components/inputs/TextInput';
import {ButtonForForm} from '@components/inputs/buttons/ButtonForForm';
import auth from '@react-native-firebase/auth';

// Error handling is not in place due to time constraint

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  function login() {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
  }

  return (
    <View style={styles.globalSpace}>
      <View style={styles.alignTitle}>
        <Text style={styles.mainTitle}>Login</Text>
      </View>

      <TxtInput
        title="email"
        onChange={adress => {
          setEmail(adress);
        }}
        value={email}
        placeholder="email"
        password={false}
      />
      <TxtInput
        title="Password"
        onChange={pass => {
          setPassword(pass);
        }}
        value={password}
        placeholder="●●●●●●"
        password={true}
      />

      <View style={styles.registerTextWrapper}>
        <Text style={styles.registerText}>Not registered ? </Text>
        <Text
          onPress={() => navigation.navigate('register')}
          style={styles.registerTextClickable}>
          register here
        </Text>
      </View>

      <View style={styles.alignButton}>
        <ButtonForForm onPress={login} title="Login" />
      </View>
    </View>
  );
};

export default LoginScreen;
