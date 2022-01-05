import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './styles';
import { Header } from '../Header';
import { colors } from '../../layout/appBase';
import { IconClose } from '..';
import { Modal } from 'react-native-web';

export const ModalNativo = ({
  children,
  size,
  title,
  open,
  close = () => null,
  action,
  alignContent = 'center',
}) => {
  return (
    <>
      {
        open ?
        size === 'full' ?
        <StatusBar backgroundColor={colors.container_bg} barStyle="dark-content" />
        :<StatusBar backgroundColor={colors.opacity_bgh} barStyle="light-content" />
        :null
      }
      
      <Modal isVisible={open} onBackdropPress={close} onBackButtonPress={close} style={{margin: 0}}>
        <View style={{width: '100%', height: '100%', justifyContent:'flex-end'}}>
        {
          size === 'full' ?
          <View style={[styles.modal_content, styles.modal_content_full]}>
            <Header 
              left={true} 
              actionLeft={close} 
              leftText={<IconClose color={colors.color_05} width={40} height={40} fill="currentColor" />}
            >{title}</Header>
            <ScrollView style={styles.modal_content_scroll}>
              {children}
            </ScrollView>
          </View>
          :
          <View style={[styles.modal_content]}>
            {
              title ?
              <Header 
                left={true} 
                actionLeft={close} 
                leftText={<IconClose color={colors.color_05} width={30} height={30} fill="currentColor" />}
              >{title}</Header>
              :null
            }
            <ScrollView style={styles.modal_content_scroll}>
              <View style={[{paddingBottom: 30}, {alignItems: alignContent?alignContent:'center'}]}>
                {children}
              </View>
            </ScrollView>
          </View>
        }
        </View>
        </Modal>
    </>
  )
};
