import React from 'react';
import {ListItem} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {CategoriesBoxStyleSheet as styles} from '@styles/components/categoriesBox';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';

// import icon from '@assets/icons/camping.png';

const CategoriesBox = props => {
  const navigation = useNavigation();
  const dataFromCateogryBoxEndpoint = props.data;
  const icon = props.icon;
  console.log(dataFromCateogryBoxEndpoint); // ska bort

  return (
    <ScrollView>
      {dataFromCateogryBoxEndpoint.length > 0 ? (
        <View style={styles.categoryButtonWrapper}>
          {dataFromCateogryBoxEndpoint.map((category, index) => (
            <ListItem
              key={index}
              onPress={
                (() => navigation.navigate('category-details'),
                {
                  params: {
                    nameOfunit: category.name,
                  },
                })
              }
              containerStyle={styles.categorylistElement}>
              <TouchableOpacity style={styles.categoryButton}>
                <View style={styles.categoryIconWrapper}>
                  {/* Image are not connected to firebase because
                    of size constraint in firebase and i have no time
                    to figure out the best solution. the image will not
                    affect the user experience anyway because the project only
                    design to work as a barebone app with no sharing capabilities
                    due of the time constraint */}
                  <Image source={icon} style={styles.categoryIcon} />
                </View>
                <Text style={styles.categoryTitle}>{category.title}</Text>
              </TouchableOpacity>
            </ListItem>
          ))}
        </View>
      ) : (
        <View style={styles.noDataWrapper}>
          <Text style={styles.noboxes}>No categories has been created yet</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default CategoriesBox;
