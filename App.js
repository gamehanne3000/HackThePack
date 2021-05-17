import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const getData = () => {
  const db = firestore();
  return db
    .collection('debugCollection')
    .get()
    .then(x => {
      console.log(x);
    })
    .catch(err => {
      console.log(err);
    });
};

const App = () => {
  getData();

  return (
    <View>
      <Text>hejsan</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
