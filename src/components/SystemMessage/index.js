import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import IcoCheck from '../icons/check.svg'
import IcoWarning from '../icons/warning.svg'
import IcoWIfi from '../icons/wifi.svg'

import { colors } from '../../styles/appBase';

export const SystemMessage = ({
  children,
  type,
  closeMensagemSistema
}) => {

  const icoMessage = (e) => {
    switch (e) {
      case 'success':
        return <View style={[styles.message_ico_border, styles.message_ico_border_success]}>
          <IcoCheck width={52} height={52} color={colors.color_01} />
        </View>
      
      case 'error':
        return <View style={[styles.message_ico_border, styles.message_ico_border_error]}>
          <IcoWarning width={52} height={52} color={colors.color_01} />
        </View>
          
      case 'warning':
        return <View style={[styles.message_ico_border, styles.message_ico_border_warning]}>
          <IcoWarning width={52} height={52} color={colors.color_01} />
        </View>

      case 'erro-wifi':
        return <View style={[styles.message_ico_border, styles.message_ico_border_error]}>
          <IcoWIfi width={52} height={52} color={colors.color_01} />
        </View>
      default:
        break;
    }
  }

  return (
    <TouchableOpacity onPress={closeMensagemSistema} style={styles.modal_message_opacity}>
      
      <View style={styles.modal_message}>
        {
          type ? icoMessage(type)
          : null
        }
        <Text style={styles.modal_message_text}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  )
};