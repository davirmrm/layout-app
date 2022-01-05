import { SSL_OP_NO_TLSv1_1 } from 'node:constants';
import { StyleSheet } from 'react-native';
import { colors, fonts, spacing } from '../../../styles/appBase';

const styles = StyleSheet.create({
  form_box: {
    position: 'relative',
    paddingTop: spacing.xxs,
    marginBottom: spacing.sm,
  },
  title: {
    color: colors.color_02,
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    lineHeight: 16,
    marginBottom: spacing.sm,
  },
  input: {
    backgroundColor: colors.input_bg,
    borderWidth: 1,
    // borderColor: colors.input_primary,
    borderRadius: 50,

    marginHorizontal: spacing.sm,


    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    
    color: colors.color_02,
    fontFamily: 'Montserrat-Semibold',
    fontSize: 16,
    lineHeight: 20,
  },

  label: {
    // fontFamily: 'Montserrat-Regular',
    fontSize: 13,
    lineHeight: 13,
    paddingHorizontal: spacing.xs,
    
    backgroundColor: colors.input_bg,
    position: 'absolute',
    left: 41,
    zIndex: 2,
  },
  input_normal: {
    borderColor: colors.input_success,
  },
  input_ativo: {
    borderColor: colors.primary_bg,
  },
  label_normal: {
    color: colors.input_success,
    top: 26,
    
    fontSize: 16,
    lineHeight: 16,
  },
  label_ativo: {
    color: colors.primary_bg,
  },
});

export default styles;
