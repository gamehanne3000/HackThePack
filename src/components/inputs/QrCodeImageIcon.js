import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {QrCodeImageGridIconStyleSheet as styles} from '@styles/components/qrCode';

// icons
import Archive from '@assets/icons/archive.png';
import Baby from '@assets/icons/baby.png';
import Camping from '@assets/icons/camping.png';
import Electronic from '@assets/icons/electronic.png';
import Nostalagia from '@assets/icons/nostaliga.png';
import Tools from '@assets/icons/tools.png';
import Vacation from '@assets/icons/vacation.png';
import Winter from '@assets/icons/winter.png';

export const QrCodeImageIconGridInput = ({onSelect, title}) => {
  const renderItem = ({item}) => (
    <View key={item.key}>
      <TouchableOpacity
        style={styles.grid}
        onPress={() => {
          onSelect(item);
        }}>
        <Image source={item.image} style={styles.image} />
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.imageWrapper}>
        <FlatList
          data={icons}
          renderItem={renderItem}
          keyExtractor={item => item.key}
          numColumns="4"
        />
      </View>
    </>
  );
};

const icons = [
  {
    key: 'archive',
    image: Archive,
  },
  {
    key: 'baby',
    image: Baby,
  },
  {
    key: 'camping',
    image: Camping,
  },
  {
    key: 'electronic',
    image: Electronic,
  },
  {
    key: 'nostalagia',
    image: Nostalagia,
  },
  {
    key: 'tools',
    image: Tools,
  },
  {
    key: 'vacation',
    image: Vacation,
  },
  {
    key: '@assets/icons/winter.png',
    image: Winter,
  },
];
