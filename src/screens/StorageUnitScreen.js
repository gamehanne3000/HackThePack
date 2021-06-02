import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import GenerateQr from '@components/storage-unit/GenerateQr';
import {detailUnitStyleSheet as styles} from '@styles/screens/detailUnit';
import {TitleWithBorderAtLeftSide} from '@components/TitleWithBorder';
import {ButtonToAddItem} from '@components/storage-unit/AddItem';
import ItemBox from '@components/storage-unit/ItemBox';
import firestore from '@react-native-firebase/firestore';

/*
    This screen are the placheholder as the data from firebase allocates correct data respectively.
        * qr-code
        * Items
*/

const StorageUnitScreen = props => {
  // Props
  const path = props.route.params.detailUnit;
  const specificCategory = props.route.params.detailUnit.category;
  const specificDetailUnit = props.route.params.detailUnit.detailUnit;
  // Hook
  const [items, setItems] = useState([]);

  /*
     Read:
     Retrieve all list items from the current box in real time
  */
  function getItems() {
    // Reference
    const partsRef = firestore()
      .collection('Units')
      .doc(specificCategory)
      .collection('Parts');

    // Real time observer
    partsRef.onSnapshot(
      snapshot => {
        const changes = snapshot.docChanges();

        changes.forEach(change => {
          /*
            Listeners for when something is goes trough firebase firestore
            */
          if (change.type === 'added') {
            setItems(change.doc.data().items); // Only push the new objects
            console.log('New item: ', change.doc.data());
          }

          if (change.type === 'modified') {
            console.log('Modified item: ', change.doc.data());
          }

          if (change.type === 'removed') {
            console.log('Removed list item: ', change.doc.data());
          }
        });
      },
      error => {
        console.log('Something went wrong retrieving the items', error);
      },
    );
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      <View style={[styles.noSpace, styles.storageUnitHeaderContainer]}>
        <GenerateQr data={path} />
      </View>
      <View style={styles.itemsContainer}>
        <View style={styles.itemsContainerHeader}>
          <TitleWithBorderAtLeftSide title={specificDetailUnit} />
          <ButtonToAddItem data={path} />
        </View>
        <ScrollView>
          <ItemBox listData={items} data={path} />
        </ScrollView>
      </View>
    </>
  );
};

export default StorageUnitScreen;
