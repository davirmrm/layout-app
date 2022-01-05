import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../../styles/appBase';

import ArrowRightSmall from '../../icons/arrow-right-small.svg';

import styles from './styles';

export const ListItem = ({ title, onPress }) => (
  <View style={styles.container_list}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
      <ArrowRightSmall width={24} height={24} fill={colors.primary_bg} />
    </TouchableOpacity>
  </View>
);
