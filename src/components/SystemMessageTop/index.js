import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { useSelector } from 'react-redux';
import styles from './styles';

export const SystemMessageTop = ({
  text,
  type,
  actionNavigate,
  paramsNavigate = {},
  close
}) => {
  const navigation = useNavigation();
  const call = useSelector((state) => state.statAtendimento.call)
  
  const retornarChamada = () => {
    navigation.navigate('Atendimento', {tela: 'meet'});
  }

  return call.chamada?.session?
    <TouchableOpacity style={styles.mensagemChamada} onPress={retornarChamada}>
      <Text style={styles.mensagemChamadaText}>Retornar a Chamada!</Text>
    </TouchableOpacity>
    : null
};