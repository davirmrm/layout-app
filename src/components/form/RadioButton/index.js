import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles.js';

export const RadioButton = ({
  toggle,
  name = '',
  title = '',
  data = [],
  selected,
  ...rest
}) => {
  
  const verify = (e) => {
    return selected === e.id ? styles.radio_ativo : {}
  } 

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      {
        data.map((iten)=> <TouchableOpacity
            key={`${name}-${iten.id}`}
            onPress={() => toggle(iten)}
            style={styles.radioButton}
            {...rest}
          >
          <View style={[styles.radio, verify(iten)]} />
        
            <Text style={styles.text}>
              {iten.name}
            </Text>
          </TouchableOpacity>
        )
        
      }
    </View>
  )
};