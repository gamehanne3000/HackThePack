import React from 'react';
import {Divider} from 'react-native-elements';
import {View, Text} from 'react-native';
import {titleStyleSheet as styles} from '@styles/components/titleWithBorder';

const TitleWithBorder = ({title}) => {
  return (
    <View style={styles.titleWrapper}>
      <Text style={styles.title}>{title}</Text>
      <Divider style={styles.orangeBorder} />
    </View>
  );
};

export default TitleWithBorder;
