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

  console.log(detailUnits);

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
                    detailUnit: unit.detailUnit,
                  });
                }}
                containerStyle={styles.unitlistElement}>
                <View style={styles.unitButton}>
                  <View style={styles.unitIconWrapper}>
                    {/* Image are not connected to firebase because
                    of size constraint in firebase and i have no time
                    to figure out the best solution. the image will not
                    affect the user experience anyway because the project only
                    design to work as a barebone app with no sharing capabilities
                    due of the time constraint */}
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
