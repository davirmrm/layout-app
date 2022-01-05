import { Dimensions } from 'react-native';

export const colors = {
  color_primary: '#69c9c7',
  color_secondary: '#BBBBBB',
  
  color_disponivel: '#AAF290',
  color_compromisso: '#65CEFE',
  color_ocupado: '#FF857D',
  color_atual: '#69c9c7',

  color_01: '#fff',
  color_02: '#000',
  color_03: '#BBBBBB',
  color_04: '#555555',
  color_05: '#3c3c3c',
  color_06: '#282828',
  color_07: '#f1f1f1',
  
  default_bg: '#fff',
  default_bgh: '#BBBBBB',
  default_color: '#3c3c3c',

  primary_bg: '#69c9c7',
  primary_bgh: '#46b8aa',
  primary_color: '#fff',

  secondary_bg: '#e3e3e3',
  secondary_bgh: '#d4d4d4',
  secondary_color: '#444',

  success_bg: '#008327',
  success_bgh: '#00561a',
  success_color: '#fff',

  error_bg: '#F95C5C',
  error_bgh: '#FF2F22',
  error_color: '#fff',

  warning_bg: '#f8b24a',
  warning_bgh: '#d5932f',
  warning_color: '#fff',

  container: '#E5E5E5',
  container_bg: '#fff',
  container_color: '#282828',

  input_bg: '#fff',
  input_success: '#BBBBBB',
  input_secondary: '#69c9c7',
  input_success_color: '#BBBBBB',
  input_secondary_color: '#555555',
  
  background_opacity: '#000000b3',
  opacity_bgh: '#4c4c4c',
}

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
};


export const spacing = {
  xxs: 4,
  xs: 8,
  sm: 16,
  md: 24,
  lg: 32,
  xl: 40,
  xxl: 48,
};

export const padding = {
  xxs: 4,
  xs: 8,
  sm: 16,
  md: 24,
  lg: 32,
  xl: 40,
  xxl: 48,
};

export const margin = {
  xxs: 4,
  xs: 8,
  sm: 16,
  md: 24,
  lg: 32,
  xl: 40,
  xxl: 48,
};

export const fonts = {
  monserratBold20: {
    color: colors.container_color,
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    lineHeight: 22,
  },
};
