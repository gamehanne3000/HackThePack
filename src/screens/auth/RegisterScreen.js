import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {AuthStyleSheet as styles} from '@styles/screens/auth';
import {TxtInput} from '@components/inputs/TextInput';
import {ButtonForForm} from '@components/inputs/buttons/ButtonForForm';
import auth from '@react-native-firebase/auth';

const RegisterScreen = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [repeatedPassword, setRepeatedPassword] = useState(null);

  /*
    This Function performs two operations;
      * First: creating the user if they do not already exist,
      * Second: sign the user in.
  */
  function register() {
    auth()
      .createUserWithEmailAndPassword(email, password)
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
        <Text style={styles.mainTitle}>Register</Text>
      </View>

      <TxtInput
        title="Username"
        onChange={adress => {
          setEmail(adress);
        }}
        value={email}
        placeholder="username"
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

      <TxtInput
        title="Repeat password"
        onChange={pass => {
          setRepeatedPassword(pass);
        }}
        value={repeatedPassword}
        placeholder="●●●●●●"
        password={true}
      />

      <View style={styles.alignButton}>
        <ButtonForForm onPress={register} title="Register" />
      </View>
    </View>
  );
};

export default RegisterScreen;
