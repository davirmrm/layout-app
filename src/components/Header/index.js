import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { IconArrowLeft } from '..';
import { colors } from '../../layout/appBase';
import { styles } from './styles';

export const Header = ({
  actionLeft,
  actionRight,
  leftText = '',
  rightText = '',
  left = false,
  right = false,
  children,
}) => {
  const tipo = typeof children
  const tipoLeftText = typeof leftText
  const tipoRightText = typeof rightText
  
  return (
    <>
      <View style={styles.header}>
        {
          left && <View>
            <TouchableOpacity style={[styles.header_button, styles.header_button_left]} onPress={actionLeft}>
              {
                leftText ? leftText : <IconArrowLeft color={colors.color_05} width={40} height={40} fill="currentColor" />
              }
            </TouchableOpacity>
          </View>
        }
       
        <View style={[styles.header_center, (left || right) ? styles.header_center_normal : styles.header_center_full]}>
          {
            tipo === 'string' ?
            <Text style={styles.header_titulo}>{children}</Text>
            : children
          }
        </View>

        {
          right && <View>
            <TouchableOpacity style={[styles.header_button, styles.header_button_right]} onPress={actionRight}>
              {rightText ? rightText : <Left color={colors.color_05} width={40} height={40} fill="currentColor" />}
            </TouchableOpacity>
          </View>
        }
        
      </View>
    </>
  );
};
