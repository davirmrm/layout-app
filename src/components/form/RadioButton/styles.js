import { StyleSheet } from 'react-native';
import { colors, fonts, spacing } from '../../../styles/appBase';

const styles = StyleSheet.create({
  title: {
    color: colors.color_02,
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    lineHeight: 16,
    marginBottom: spacing.sm,
  },
  radioButton: {
    flexDirection:'row', 
    flexWrap:'wrap',
    alignItems: 'center',
    paddingVertical: spacing.xs,
  },
  radio: {
    display: 'flex',
    backgroundColor: colors.color_01,
    
    marginRight: spacing.sm,
    borderRadius: 50,
    height: 20,
    width: 20,
    
    shadowColor: colors.color_06,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,  
    elevation: 5
  },
  radio_ativo: {
    backgroundColor: colors.primary_bg,
  },
  text: {
    color: colors.color_02,
    fontFamily: 'Montserrat-Normal',
    fontSize: 14,
    lineHeight: 14,
  },
});

export default styles;
