import React, { useCallback, useState } from 'react';
import {
  Alert,
  Platform,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import ImagePicker, {
  ImagePickerOptions,
  ImagePickerResponse,
} from 'react-native-image-picker';
import Modal from 'react-native-modal';
import { colors } from '../../../styles/appBase';
import AddIcon from '../../icons/add.svg';
import AttachIcon from '../../icons/attach.svg';
import ListItem from './listIten';
import styles from './styles';

export const FileInput = ({
  label,
  files,
  required = false,
  onAddFile,
  onRemoveFile,
  style,
}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleToggleModal = useCallback(() => {
    setModalVisible(prevState => !prevState);
  }, []);

  const handlePickFile = useCallback(async () => {
    const file = await DocumentPicker.pick({
      type: [DocumentPicker.types.allFiles],
    });
    onAddFile(file);
    setModalVisible(prevState => !prevState);
  }, [onAddFile]);

  const options = {
    noData: true,
    quality: 1.0,
    maxWidth: 512,
    maxHeight: 512,
    mediaType: 'photo',
    title: undefined,
    cancelButtonTitle: 'Cancelar',
    takePhotoButtonTitle: 'Acionar câmera',
    chooseFromLibraryButtonTitle: 'Selecionar foto',
    permissionDenied: {
      title: 'Sem permissão',
      text:
        'O aplivativo Salutho precisa de autorização para tirar fotos ou acessar a galeria de fotos do dispositivo. Verifique as permissões nas configurações de seu dispositivo e tente novamente.',
      reTryTitle: 'Tentar novamente',
      okTitle: 'OK',
    },
  };

  const imagePickerCallback = useCallback(
    (response) => {
      try {
        const source = {
          uri: response.uri,
          type: response.type,
          // eslint-disable-next-line no-useless-escape
          name: response.fileName || response.uri.replace(/^.*[\\\/]/, ''),
        };

        onAddFile(source);
        setModalVisible(prevState => !prevState);
      } catch {
        Alert.alert(
          'Problema ao acessar as fotos',
          'O aplivativo Salutho precisa de autorização para acessar as fotos do dispositivo. Verifique as permissões nas configurações de seu dispositivo e tente novamente.',
        );
      }
    },
    [onAddFile],
  );

  const handleLaunchCamera = useCallback(() => {
    ImagePicker.launchCamera(options, imagePickerCallback);
  }, [options, imagePickerCallback]);

  const handleLaunchImageLibrary = useCallback(() => {
    ImagePicker.launchImageLibrary(options, imagePickerCallback);
  }, [options, imagePickerCallback]);

  const handleRemoveFile = useCallback(
    (item, index) => {
      Alert.alert('Remover anexo', `Deseja remover o anexo ${item.name}?`, [
        { text: 'Não', style: 'cancel' },
        { text: 'Sim', onPress: () => onRemoveFile(index) },
      ]);
    },
    [onRemoveFile],
  );

  return (
    <>
    <View style={styles.form_box}>
      {
        label?<Text style={[ styles.label, styles[`label_ativo`] ]}>{`${required?'*':''} ${label}`}</Text>:null
      }
      <View style={styles.form_input}>
        <View style={[styles.input, styles[`input_ativo`], style]} >
          {files?.length > 0 ? (
            <View>
              {files.map((item, index) => (
                <TouchableOpacity
                  key={String(index)}
                  onPress={() => handleRemoveFile(item, index)}
                  style={styles.row}
                >
                  <AttachIcon
                    width={16}
                    height={16}
                    fill={colors.primary_bg}
                  />
                  <Text style={styles.fileName}>
                    {item.name?.substring(0, 24)}
                    {item.name && item.name.length > 24 && '...'}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            <Text style={styles.placeholder}>Selecionar arquivo</Text>
          )}

          <View style={styles.form_actions}>
            <TouchableOpacity onPress={handleToggleModal} style={styles.addIcon}>
              <AddIcon width={24} height={24} fill={colors.primary_bg} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </View>

      <Modal isVisible={isModalVisible} onBackdropPress={handleToggleModal}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Anexar arquivo</Text>
          <ListItem
            title="Tirar foto do documento"
            onPress={handleLaunchCamera}
          />
          {Platform.OS === 'ios' && (
            <ListItem
              title="Selecionar foto do documento"
              onPress={handleLaunchImageLibrary}
            />
          )}
          <ListItem title="Selecionar arquivo" onPress={handlePickFile} />
        </View>
      </Modal>
    </>
  );
};
