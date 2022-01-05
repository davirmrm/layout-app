import { StyleSheet } from 'react-native';
import { colors, fonts, spacing } from '../../../layout/appBase';

const styles = StyleSheet.create({
  checkbox: {
    flexDirection:'row', 
    flexWrap:'wrap',
    alignItems: 'center',
    paddingVertical: spacing.xs,
  },
  checkbox_inativo: {
    display: 'flex',
    backgroundColor: colors.input_bg,
    
    marginRight: spacing.sm,
    borderRadius: 5,
    borderColor: colors.primary_bgh,
    borderWidth: 1,
    height: 25,
    width: 25,
    
    shadowColor: colors.color_06,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,  
    elevation: 5
  },
  checkbox_ativo: {
    backgroundColor: colors.primary_bg,
  },
  check: {
    position: 'relative',
    top: 0,
    left: 0,
  },
  text: {
    ...fonts.monserratNormald16
  },
});

export default styles;
