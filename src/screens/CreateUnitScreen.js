/*
  Create the info needed and send to firebase
*/
import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {FormStyleSheet as styles} from '@styles/screens/auth';
import {TxtInput} from '@components/inputs/TextInput';
import {QrCodeImageIconGridInput} from '@components/inputs/QrCodeImageIcon';
import {ButtonForForm} from '@components/inputs/buttons/ButtonForForm';
import {createUnitToFirebase} from '../utils/FirebaseHandler';

const CreateUnitScreen = ({navigation}) => {
  // hooks
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [title, setTitle] = useState(null);
  const [category, setCategory] = useState(null);

  const onSelect = item => {
    if (selectedIcon && selectedIcon.key === item.key) {
      setSelectedIcon(null);
    } else {
      setSelectedIcon(item);
    }
  };

  const createUnit = async () => {
    createUnitToFirebase({
      category: category,
      title: title,
      icon: Image.resolveAssetSource(selectedIcon.image).uri,
    });
    await navigation.navigate('home-page');
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
        <ButtonForForm onPress={() => createUnit()} title="Generate" />
      </View>
    </View>
  );
};

export default CreateUnitScreen;
