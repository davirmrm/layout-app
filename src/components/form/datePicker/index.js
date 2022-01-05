import React, { useEffect, useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';

export const DatePicker = ({
  name = '',
  label = '',
  value,
  style,
  handleOnChange,
  keyboardType = 'text',
  ...rest
}) => {
  const [status, setStatus] = useState('ativo')

  useEffect(() => {
    if (value === '') {
      setStatus('normal') 
    }
  },[])

  const handleInputFocus = (e) => {
    setStatus('ativo')
  }  
  
  const handleInputBlur = (e) => {
    if (value === '') {
      setStatus('normal')
    }
  }

  return (
    <View style={styles.form_box}>
      <Text style={[ styles.label, styles[`label_${status}`] ]}>{label}</Text>
      <TextInput
          style={[styles.input, styles[`input_${status}`], style]}
          // ref={inputElementRef}
          // keyboardAppearance="light"
          keyboardType={keyboardType}
          defaultValue={value}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChangeText={(e)=> handleOnChange({name: name, value: e})}
          {...rest}
        />
    </View>
  )
};
