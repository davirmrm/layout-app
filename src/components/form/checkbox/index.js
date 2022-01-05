import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import { colors } from '../../../layout/appBase';
import { IconCheck } from '../..';

export const Checkbox = ({
  toggle,
  name = '',
  label = '',
  value = false,
  ...rest
}) => {

  const verify = (e) => {
    return e ? styles.checkbox_ativo : {}
  } 

  return (
    <View>
        <TouchableOpacity
          onPress={() => toggle({name: name, value: !value})}
          style={styles.checkbox}
          {...rest}
        >
          <View style={[styles.checkbox_inativo, verify(value)]}> 
            {
              value ?
              <IconCheck style={styles.check} width={24} height={24} color={colors.primary_color} />
              :null
            }
          </View>
      
          <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    </View>
  )
};
