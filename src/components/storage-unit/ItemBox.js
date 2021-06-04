import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {unitStyleSheet as styles} from '@styles/components/storageUnit';
import {ListItem} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import {ButtonToChangeItem} from '@components/storage-unit/UpdateItem';

// image
import cameraPlacholder from '@assets/icons/cameraPlaceholder.png';
import deleteBtn from '@assets/icons/trash-btn.png';

/*
    Display the stored items of the respective unit.
        * data are retreived based on the category & title of the box
*/

const ItemBox = props => {
  const category = props.data.category;
  const detailUnit = props.data.detailUnit;

  // Remove
  function removeItem(title) {
    const originalItemsArray = [...props.listData];

    // Give back all object that not contanins the item i want to remove
    const result = originalItemsArray.filter(element => {
      return element.partTitle !== title;
    });

    // Update firestore with the newly filtered array
    firestore()
      .collection('Units')
      .doc(category)
      .collection('Parts')
      .doc(detailUnit)
      .update({
        items: result,
      });
  }

  return (
    <>
      {props.listData !== null ? (
        <ScrollView>
          {props.listData.map((item, index) => (
            <ListItem key={index} containerStyle={styles.listElement}>
              <View style={styles.listItemButton}>
                <View style={styles.unitIconWrapper}>
                  <Image source={cameraPlacholder} style={styles.camera} />
                </View>
                <View style={styles.listContent}>
                  <View>
                    <Text style={styles.listItemTitle}>{item.partTitle}</Text>
                    <Text style={styles.subtitle}>{item.partSubtitle}</Text>
                  </View>
                  <View style={styles.actionWrapper}>
                    <TouchableOpacity
                      onPress={() => removeItem(item.partTitle)}>
                      <Image source={deleteBtn} style={styles.removeBtn} />
                    </TouchableOpacity>
                    <ButtonToChangeItem
                      path={props.data}
                      data={props.listData}
                      index={index}
                    />
                  </View>
                </View>
              </View>
            </ListItem>
          ))}
        </ScrollView>
      ) : (
        <Text>No items yet. Click on the brown plus button to add items.</Text>
      )}
    </>
  );
};

export default ItemBox;
