import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  Text,
  View,
} from 'react-native';
import { colors } from '../../layout/appBase';
import styles from './styles';

export const LoadingPage = ({
  message = 'Carregando...'
}) => {

  return (
  <>
    <StatusBar backgroundColor={colors.primary_bg} barStyle="light-content" />
    <View style={styles.container}> 
      <View style={styles.loading}>
        <ActivityIndicator size="large" color={colors.primary_color} />
        <Text style={styles.loading_text}>{message}</Text>
      </View>
    </View>
  </>
  )
};
