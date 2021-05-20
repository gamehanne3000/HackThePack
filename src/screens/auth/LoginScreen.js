import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {AuthStyleSheet as styles} from '@styles/screens/auth';
import {TxtInput} from '@components/inputs/TextInput';

// Error handling is not in place due to time constraint

const LoginScreen = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  console.log(username);
  console.log(password);

  return (
    <View style={styles.globalSpace}>
      <TxtInput
        title="Username"
        onChange={text => {
          setUsername(text);
        }}
        value={username}
        placeholder="username"
      />
      <TxtInput
        title="Password"
        onChange={pass => {
          setPassword(pass);
        }}
        value={password}
        placeholder="password"
      />
      <TextInput />
    </View>
  );
};

export default LoginScreen;
