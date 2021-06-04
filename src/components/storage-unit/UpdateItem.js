import React, {useState} from 'react';
import {
  Modal,
  Image,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {modalStyleSheet as styles} from '@styles/components/storageUnit';
import {TxtInput} from '@components/inputs/TextInput';
import editBtn from '@assets/icons/change-btn.png';
import firestore from '@react-native-firebase/firestore';

export const ButtonToChangeItem = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [item, setItem] = useState(null);
  const [optional, setOptional] = useState(null);

  // From 'path' prop
  const specificCategory = props.path.category;
  const specificDetailUnit = props.path.detailUnit;

  // From 'index' prop
  const id = props.index;

  // From 'data' prop
  const items = props.data;

  /*
    This function closes down the modal.
      -> updates the respektive data in firestore.
  */
  function updateItem() {
    setModalVisible(!modalVisible);

    // This updates the object's name property on the client side
    // Important that this runs before sending to firebase
    // Because i want the changes and not the old object
    items[id].partTitle = item;
    items[id].partSubtitle = optional;

    firestore()
      .collection('Units')
      .doc(specificCategory)
      .collection('Parts')
      .doc(specificDetailUnit)
      .update({
        items: items,
      });
  }

  return (
    <View>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <TouchableOpacity
          style={styles.centeredView}
          activeOpacity={1}
          onPressOut={() => {
            setModalVisible(false);
          }}>
          <View>
            <TouchableWithoutFeedback>
              <View>
                <View style={styles.modalView}>
                  <TxtInput
                    title="Item"
                    onChange={text => {
                      setItem(text);
                    }}
                    value={item}
                    placeholder="your item"
                    password={false}
                  />
                  <TxtInput
                    title="Subtitle"
                    onChange={text => {
                      setOptional(text);
                    }}
                    value={optional}
                    placeholder="optional..."
                    password={false}
                  />
                  <View style={styles.buttonWrapper}>
                    <TouchableOpacity
                      onPress={() => console.log('change image')}
                      style={[styles.button, styles.withYellowBackground]}>
                      <Text style={styles.textStyle}>image</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => updateItem()}
                      style={[styles.button, styles.withBlueBackground]}>
                      <Text style={styles.textStyle}>update item</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableOpacity>
      </Modal>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image source={editBtn} style={styles.updateBtn} />
      </TouchableOpacity>
    </View>
  );
};
