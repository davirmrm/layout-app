import React from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../../layout/appBase';
import styles from './styles';

const verifyType = (e) => {
  switch (e) {
    case 'primary':
      return {
        btn: {
          backgroundColor: colors.primary_bg,
          borderColor: colors.primary_bg,
        },
        text: {
          color: colors.primary_color
        }
      }
    
    case 'secondary':
      return {
        btn: {
          backgroundColor: colors.secondary_bg,
          borderColor: colors.secondary_bg,
        },
        text: {
          color: colors.secondary_color
        }
      }

    case 'error' || 'erro' || 'danger':
      return {
        btn: {
          backgroundColor: colors.error_bg,
          borderColor: colors.error_bg,
        },
        text: {
          color: colors.error_color
        }
      }
    case 'warning':
      return {
        btn: {
          backgroundColor: colors.warning_bg,
          borderColor: colors.warning_bg,
        },
        text: {
          color: colors.warning_color
        }
      }
    default:
      return {
        btn: {
          backgroundColor: colors.default_bg,
          borderColor: colors.default_bgh,
        },
        text: {
          color: colors.default_color
        }
      }
  }
}

export const Button = ({
  blank,
  children,
  loading,
  onPress,
  outlined,
  color = 'default',
  style,
  ...rest
}) => {
  const styleType = verifyType(color)
  return (
  <TouchableOpacity
    onPress={onPress}
    disabled={loading}
    style={[
      styles.container,
      styleType.btn,
      blank && styles.blank,
      outlined && styles.outlined,
      style,
    ]}
    activeOpacity={0.4}
    {...rest}
  >

    {loading ? (
      <ActivityIndicator
        color={styleType.text?.color}
      />
    ) : (
      <Text style={[styles.text, styleType.text]}>
        {children}
      </Text>
    )}
  </TouchableOpacity>
)};
