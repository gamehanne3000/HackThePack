/*  1. create the info needed and send to firebase
    2. send to list view and retreive the correct data from firebase -> this gives me:
        * qr-id for the specific collection
        * title from form
*/
import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {FormStyleSheet as styles} from '@styles/screens/auth';
import {TxtInput} from '@components/inputs/TextInput';
import {QrCodeImageIconGridInput} from '@components/inputs/QrCodeImageIcon';
import {ButtonForForm} from '@components/inputs/buttons/ButtonForForm';
import firestore from '@react-native-firebase/firestore';

const CreateUnitScreen = ({navigation}) => {
  const [title, setTitle] = useState(null);
  const [category, setCategory] = useState(null);
  const storageRef = firestore().collection('Storage');
  const [selectedIcon, setSelectedIcon] = useState(null);

  const onSelect = item => {
    if (selectedIcon && selectedIcon.key === item.key) {
      setSelectedIcon(null);
    } else {
      setSelectedIcon(item);
      console.log(item);
    }
  };

  /*
    Inside the collection i assigns each storage-unit with
    a random generated id. If it does not exist it will create it
  */
  const addUnitToFirebase = async () => {
    const categoryAndNameOfBox = {
      name: title,
      category: category,
      // icon - can not implement due to time constraint.
    };
    await storageRef.doc().set(categoryAndNameOfBox);
  };

  return (
    <View style={styles.globalSpace}>
      <View style={styles.alignTitle}>
        <Text style={styles.mainTitle}>Create a new unit</Text>
      </View>

      <TxtInput
        title="Title"
        onChange={name => {
          setTitle(name);
        }}
        value={title}
        placeholder="my new list..."
        password={false}
      />
      <TxtInput
        title="Category"
        onChange={newTitle => {
          setCategory(newTitle);
        }}
        value={category}
        placeholder="Name of the category"
        password={false}
      />

      <View>
        <QrCodeImageIconGridInput
          selectedIcon={selectedIcon}
          onSelect={onSelect}
          title="Give your qr another look"
        />
      </View>

      <View style={styles.alignButton}>
        <ButtonForForm onPress={addUnitToFirebase} title="Generate" />
      </View>
    </View>
  );
};

export default CreateUnitScreen;
