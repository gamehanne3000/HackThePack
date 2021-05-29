import React from 'react';
import {View, Text, Image} from 'react-native';
import {HomeStyleSheet as styles} from '@styles/screens/home';
import {ButtonToCreateAList} from '@components/inputs/buttons/ButtonToCreateAList';
import TitleWithBorder from '@components/TitleWithBorder';
import CategoriesBox from '@components/categories/CategoriesBox';

// image
import qr from '@assets/images/qr-code-home.png';

const HomeScreen = ({navigation}) => {
  return (
    <>
      <View style={[styles.noSpace, styles.headerContainer]}>
        <Image source={qr} />
        <View style={styles.headerContentWrapper}>
          <View style={styles.headerTextContent}>
            <Text style={styles.title}>Time</Text>
            <Text style={styles.subTitle}>to start organize</Text>
          </View>
          <ButtonToCreateAList
            onPress={() => {
              navigation.navigate('create-a-unit');
            }}
            title="Create"
          />
        </View>
      </View>
      <View style={[styles.noSpace, styles.categoriesContainer]}>
        <TitleWithBorder title="Categories" />
        <CategoriesBox />
      </View>
    </>
  );
};

export default HomeScreen;
