import React, { useCallback, useMemo } from 'react';
import {
  Alert,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors } from '../../../styles/appBase';
import AttachImage from '../../icons/attach.svg';
import styles from './styles';

export const AttachFileItem = ({
  file,
  readonly,
  style,
}) => {
  // eslint-disable-next-line no-useless-escape
  const filename = useMemo(() => file.replace(/^.*[\\\/]/, ''), [file]);

  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(file);
    if (supported) {
      await Linking.openURL(file);
    } else {
      Alert.alert(`Não é possível carregar o arquivo: ${file}`);
    }
  }, [file]);

  return (
    <View style={[styles.link_arquivo, style]}>
      <AttachImage width={16} height={16} fill={colors.primary_bg} />
      {!readonly ? (
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.link_text}>
            {filename.substring(0, 20)}
            {filename.length > 20 && '...'}
          </Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.link_text}>
          {filename.substring(0, 20)}
          {filename.length > 20 && '...'}
        </Text>
      )}
    </View>
  );
};
