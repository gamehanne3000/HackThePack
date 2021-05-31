import React, {useState, useEffect} from 'react';
import {ListItem} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {unitStyleSheet as styles} from '@styles/components/storageUnit';
import {View, Text, Image, ScrollView} from 'react-native';

const CategoriesBox = props => {
  const navigation = useNavigation();
  // Firebase
  const user = auth().currentUser;
  const storageUnitRef = firestore().collection('Units');
  // hooks
  const [units, setUnits] = useState([]);
  const [loading, setLoading] = useState(false);

  /*
    Read:
    Only recieve the units that belongs to the current user
    by listening for all units that correlates with the user id.
  */
  function getCurrentUserCategoryUnits() {
    setLoading(true);
    storageUnitRef.where('unitsOwner', '==', user.uid).onSnapshot(
      snapshot => {
        const changes = snapshot.docChanges();
        const items = [];
        changes.forEach(change => {
          if (change.type === 'added') {
            items.push(change.doc.data());
          }
        });
        setUnits(items);
        setLoading(false);
      },
      error => {
        console.log('Something went wrong retrieving the categories', error);
      },
    );
  }

  // Get the array in from each document
  const unitsArray = () =>
    units.map(item => {
      return item.unit;
    });

  useEffect(() => {
    getCurrentUserCategoryUnits();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollView>
      {unitsArray().length > 0 ? (
        <View>
          {unitsArray().map((unit, index) => (
            <ListItem
              key={index}
              onPress={() => {
                navigation.navigate('category-details', {
                  detailUnit: unit,
                });
              }}
              containerStyle={styles.unitlistElement}>
              <View style={styles.unitButton}>
                <View style={styles.unitIconWrapper}>
                  {/* For now there are only 8 images that can be used */}
                  <Image source={{uri: unit[0].icon}} style={styles.unitIcon} />
                </View>
                <Text style={styles.unitTitle}>{unit[0].category}</Text>
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
              No categories has been created yet
            </Text>
          )}
        </View>
      )}
    </ScrollView>
  );
};

export default CategoriesBox;
