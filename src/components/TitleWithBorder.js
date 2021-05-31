import React from 'react';
import {Divider} from 'react-native-elements';
import {View, Text} from 'react-native';
import {titleStyleSheet as styles} from '@styles/components/titleWithBorder';

export const TitleWithBorder = ({title}) => {
  return (
    <View style={styles.titleWrapper}>
      <Text style={styles.title}>{title}</Text>
      <Divider style={styles.orangeBorder} />
    </View>
  );
};

export const TitleWithBorderAtLeftSide = ({title}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Divider style={styles.orangeBorderSmall} />
    </View>
  );
};
