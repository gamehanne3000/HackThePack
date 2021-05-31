/*
    Display the stored items of the respective unit.
        * data are retreived based on the title of the box
            - when manually or scanned by the qr-code the id are the same for easier management
*/
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {unitStyleSheet as styles} from '@styles/components/storageUnit';

// image
import cameraPlacholder from '@assets/icons/cameraPlaceholder.png';
import deleteBtn from '@assets/icons/trash-btn.png';
import editBtn from '@assets/icons/change-btn.png';

const ItemBox = () => {
  return (
    <View style={styles.unitButton}>
      <View style={styles.unitIconWrapper}>
        <Image source={cameraPlacholder} style={styles.unitIcon} />
      </View>
      <View style={styles.listContent}>
        <View>
          <Text style={styles.unitTitle}>title</Text>
          <Text style={styles.subtitle}>sub title</Text>
        </View>
        <View style={styles.actionWrapper}>
          <TouchableOpacity onPress={() => console.log('remove')}>
            <Image source={deleteBtn} style={styles.actionBtn} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('update')}>
            <Image source={editBtn} style={styles.actionBtn} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ItemBox;
