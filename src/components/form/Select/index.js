import React, { forwardRef, useEffect, useState } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';
import ArrowDown from '../../icons/arrowDown.svg';
import { colors, fonts } from '../../../styles/appBase';

export const Select = ({
  name = '',
  label = '',
  value,
  placeholder = 'Selecione',
  refInput,
  style,
  handleOnChange,
  required = false,
  error,
  options = []
}, ref) => {
  const [openSelect, setOpenSelect] = useState(false)

  return (
    <View style={styles.form_box}>
      {
        label?<Text style={[ styles.label, styles[`label_ativo`] ]}>{`${required?'*':''} ${label}`}</Text>:null
      }
      
      <View style={styles.form_input}>
        <TouchableOpacity style={[styles.input,  styles[`input_ativo`], style]} onPress={() => setOpenSelect(true)}>
          <Text style={styles.input_text}>
            {value.label?value.label:placeholder}
          </Text>
          <ArrowDown style={styles.input_arrow} width={24} height={24} color={colors.primary_bg} />
        </TouchableOpacity>
        
        <Modal isVisible={openSelect} onBackdropPress={() => setOpenSelect(false)} onBackButtonPress={() => setOpenSelect(false)}>
          <View style={styles.select_options}>
            <ScrollView>
            {
              options.map((e)=> <TouchableOpacity key={e.id?e.id:e.value} style={[styles.select_list, {backgroundColor: value.value === e.value ? colors.primary_bg: colors.container_bg}]} onPress={()=> [handleOnChange({name: name, value: e}), setOpenSelect(false)]} >
                    <Text style={[fonts.monserratNormald16, {color: value.value === e.value ? colors.primary_color: colors.container_color}]}>{e.label}</Text>
                </TouchableOpacity>
              )
            }
            </ScrollView>
          </View>
        </Modal>
        
      </View>
      
      {
        required && error? <Text style={styles.message_error}>{error}</Text> : null
      }
    </View>
  )
};
