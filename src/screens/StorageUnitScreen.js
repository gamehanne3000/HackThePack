/*
    This screen are the placheholder as the data from firebase allocates correct data respectively.
        * qr-code
        * Items
*/
import React, {useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import GenerateQr from '@components/storage-unit/GenerateQr';
import {detailUnitStyleSheet as styles} from '@styles/screens/detailUnit';
import {TitleWithBorderAtLeftSide} from '@components/TitleWithBorder';
import {ButtonToAddItem} from '@components/storage-unit/AddItem';
import ItemBox from '@components/storage-unit/ItemBox';

const StorageUnitScreen = props => {
  const specificUnit = props.route.params.detailUnit;

  useEffect(() => {
    // backend...
  });

  return (
    <>
      <View style={[styles.noSpace, styles.headerContainer]}>
        <GenerateQr />
      </View>
      <View style={styles.itemsContainer}>
        <View style={styles.itemsContainerHeader}>
          <TitleWithBorderAtLeftSide title={specificUnit} />
          <ButtonToAddItem />
        </View>
        <ScrollView>
          <ItemBox />
        </ScrollView>
      </View>
    </>
  );
};

export default StorageUnitScreen;
