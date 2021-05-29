import React, {useState, useEffect} from 'react';
import {ListItem} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {CategoriesBoxStyleSheet as styles} from '@styles/components/categoriesBox';
import {View, Text, Image, ScrollView} from 'react-native';
import TitleWithBorder from '@components/TitleWithBorder';

// Icon
import box from '@assets/icons/detailBox.png';

const CategoriesDetailScreen = ({params}) => {
  const navigation = useNavigation();

  // Props
  const detailBoxesFromCategory = params.detailUnit;
  const titleFromCategory = params.detailUnit[0].category;

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
      <TitleWithBorder title={titleFromCategory} />
      <ScrollView>
        {detailUnits.length > 0 ? (
          <View>
            {detailUnits.map((unit, index) => (
              <ListItem
                key={index}
                onPress={() => {
                  navigation.navigate('unit-details');
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
