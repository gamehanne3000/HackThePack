import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {FormStyleSheet as styles} from '@styles/screens/auth';
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
      *
      * And all this with validation at the sametime
  */
  function register() {
    if (email !== null && password !== null && repeatedPassword !== null) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created & signed in!');
        })
        .catch(error => {
          Alert.alert('Ooops..', error.message, [{text: 'ok'}]);
        });
    } else if (repeatedPassword !== password) {
      Alert.alert('Ooops..', 'password must match', [{text: 'ok'}]);
    } else {
      Alert.alert('Ooops..', 'something is missing', [{text: 'ok'}]);
    }
  }

  return (
    <View style={styles.globalSpace}>
      <View style={styles.alignTitle}>
        <Text style={styles.mainTitle}>Register</Text>
      </View>

      <TxtInput
        title="Email adress"
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
        <ButtonForForm
          onPress={register}
          title="Register"
          //disabled={nullIdentifier}
        />
      </View>
    </View>
  );
};

export default RegisterScreen;
