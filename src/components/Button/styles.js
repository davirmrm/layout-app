import { StyleSheet } from 'react-native';
import { colors, fonts, spacing } from '../../layout/appBase';

const styles = StyleSheet.create({
  blank: {
    backgroundColor: colors.color_01,
  },
  container: {
    alignItems: 'center',
    borderRadius: spacing.xs,
    height: 52,
    justifyContent: 'center',
    
    borderWidth: 1,
    
    shadowColor: colors.background_opacity,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,  
    elevation: 2
  },
  outlined: {
    backgroundColor: colors.color_01,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  text: {
    ...fonts.button16,
    textAlign: 'center',
    paddingHorizontal: spacing.sm
  }
});

export default styles;
