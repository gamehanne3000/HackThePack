import React, {useState, useEffect} from 'react';
import {ListItem} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {unitStyleSheet as styles} from '@styles/components/storageUnit';
import {View, Text, Image, ScrollView} from 'react-native';

// Icon
import box from '@assets/icons/detailBox.png';

const CategoriesDetailScreen = ({params}) => {
  const navigation = useNavigation();

  // Props
  const detailBoxesFromCategory = params.detailUnit;

  // Hooks
  const [detailUnits, setDetailUnits] = useState([]);
  const [loading, setLoading] = useState(false);

  /*
    Reusing the the data that populates home screen
    -> in other words ('CategoriesBox component')
  */
  function getDetailUnits() {
    setLoading(true);
    setDetailUnits(detailBoxesFromCategory);
    setLoading(false);
  }

  useEffect(() => {
    getDetailUnits(); // update page with right information
  }, []);

  return (
    <View>
      <ScrollView>
        {detailUnits.length > 0 ? (
          <View>
            {detailUnits.map((unit, index) => (
              <ListItem
                key={index}
                onPress={() => {
                  navigation.navigate('storage-unit', {
                    detailUnit: unit,
                  });
                }}
                containerStyle={styles.unitlistElement}>
                <View style={styles.unitButton}>
                  <View style={styles.unitIconWrapper}>
                    <Image source={box} style={styles.unitDetailIcon} />
                  </View>
                  <Text style={styles.unitTitle}>{unit.detailUnit}</Text>
                </View>
              </ListItem>
            ))}
          </View>
        ) : (
          <View style={styles.noDataWrapper}>
            {loading ? (
              <Text style={styles.noboxes}>loading...</Text>
            ) : (
              <Text style={styles.noboxes}>
                You haven't assigned any boxes to this cateogry
              </Text>
            )}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default CategoriesDetailScreen;
