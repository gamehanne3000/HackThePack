import React, {useState} from 'react';
import {
  Modal,
  Image,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {ButtonToAddItem as btnStyles} from '@styles/components/button';
import {modalStyleSheet as styles} from '@styles/components/storageUnit';
import {TxtInput} from '@components/inputs/TextInput';
import add from '@assets/icons/add-btn.png';
import {addPartToFirestore} from '../../utils/FirebaseHandler';

export const ButtonToAddItem = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [item, setItem] = useState(null);
  const [optional, setOptional] = useState(null);
  const [warnig, setWarning] = useState(false);

  // from 'data' prop
  const specificCategory = props.data.category;
  const specificDetailUnit = props.data.detailUnit;

  /*
    This function closes down the modal.
    -> sets the respektive data in firestore.
    -> restores to empty text input.
  */
  function addItem() {
    if (item !== null) {
      setWarning(false);
      setModalVisible(!modalVisible);

      //Get current path in firebase and update the array with a new item.
      addPartToFirestore({
        title: specificDetailUnit,
        category: specificCategory,
        partTitle: item,
        partSubtitle: optional,
      });

      setItem(null);
      setOptional(null);
    } else {
      setWarning(true);
    }
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
                  {warnig ? (
                    <Text style={styles.warning}>Field empty</Text>
                  ) : null}
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
                      onPress={() => console.log('add image')}
                      style={[styles.button, styles.withYellowBackground]}>
                      <Text style={styles.textStyle}>image</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => addItem()}
                      style={[styles.button, styles.withBlueBackground]}>
                      <Text style={styles.textStyle}>add item</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableOpacity>
      </Modal>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image source={add} style={btnStyles.btnAdd} />
      </TouchableOpacity>
    </View>
  );
};
