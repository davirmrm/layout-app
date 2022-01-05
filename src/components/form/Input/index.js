import React, { forwardRef, useEffect, useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  TouchableOpacityProperties,
  View,
} from 'react-native';
import { maskFormat } from '../Mask';
import {styles} from './styles';

export const Input = ({
  name = '',
  type,
  label = '',
  value,
  placeholder,
  refInput,
  style,
  handleOnChange = ()=> null,
  handleFocus = ()=> null,
  handleBlur = ()=> null,
  keyboardType = null,
  returnKeyType = 'next',
  onSubmitEditing = ()=> null,
  required = false,
  maxLength,
  mask,
  error,
  actions = [],
  multiline = false,
  ...rest
}) => {
  const [status, setStatus] = useState('ativo')

  useEffect(() => {
    // if (value === '') {
    //   setStatus('normal') 
    // }
  },[value])

  const handleInputFocus = (e) => {
    setStatus('ativo')
    handleFocus({name: name, value: value})
  }  
  
  const handleInputBlur = (e) => {

    // if (value === '') {
    //   setStatus('normal')
    // }
    handleBlur({name: name, value: value})
  }

  const submitInputMask = (e)=> {
    handleOnChange({name: name, value: e})
  }

  return (
    <View style={styles.form_box}>
      {
        label?<Text style={styles.label}>{`${required?'*':''} ${label}`}</Text>:null
      }
      <View style={styles.form_input}>
        <TextInput
          ref={refInput}
          style={[styles.input, style]}
          keyboardAppearance="light"
          keyboardType={keyboardType}
          value={mask?maskFormat(mask, value):value}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          returnKeyType={returnKeyType}
          onChangeText={(e)=> handleOnChange({name: name, value: e})}
          onSubmitEditing={()=> onSubmitEditing(name)}
          maxLength={maxLength?maxLength:1000}
          blurOnSubmit={false}
          placeholder={placeholder}
          autoCapitalize='none'
          
          numberOfLines={multiline?10: 1}
          underlineColorAndroid="transparent"
          multiline={multiline}
          {...rest}
        />
        {actions.length ? 
          <View style={styles.form_actions}>
            {
              actions.map((action, i)=> 
                <TouchableOpacity key={`action-${i}`} style={styles.action} onPress={action.action}>
                  {action.content}
                </TouchableOpacity> 
              )
            }
          </View>
          :null
        }
      </View>
      
      {
        required && error? <Text style={styles.message_error}>{error}</Text> : null
      }
    </View>
  )
};

// export default  forwardRef(Input);
