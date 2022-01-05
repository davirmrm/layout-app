import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './layoutStyle'

export default ({children}) => (
  <View style={styles.container}>
    <View>
      <Text>header</Text>
    </View>
    {children}
  </View>
);