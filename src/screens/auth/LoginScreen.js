import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {AuthStyleSheet as styles} from '@styles/screens/auth';
import {TxtInput} from '@components/inputs/TextInput';
import {ButtonForForm} from '@components/inputs/buttons/ButtonForForm';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  function login() {
    if (email !== null && password !== null) {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created & signed in!');
        })
        .catch(error => {
          Alert.alert('Ooops..', error.message, [{text: 'ok'}]);
        });
    } else {
      Alert.alert('Ooops..', 'something is missing', [{text: 'ok'}]);
    }
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
