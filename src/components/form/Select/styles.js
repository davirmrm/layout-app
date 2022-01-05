import { StyleSheet } from 'react-native';
import { colors, dimensions, fonts, margin, padding, spacing } from '../../../styles/appBase';

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
  form_input: {
    position: 'relative',
  },
  form_actions: {
    position: 'absolute',
    top: 0,
    right: spacing.sm,
  },
  action: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    alignItems: 'center',
    justifyContent:'center',
    height: 62,
  },
  input: {
    backgroundColor: colors.input_bg,
    borderWidth: 1,
    borderRadius: 50,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  input_text: {
    color: colors.container_color,
    fontFamily: 'Montserrat-Semibold',
    fontSize: 16,
    lineHeight: 25,
  },
  input_arrow: {
    alignSelf: 'flex-end',
    position:  'absolute',
    top: 15,
    right: 15,
  },

  label: {
    // fontFamily: 'Montserrat-Regular',
    fontSize: 13,
    lineHeight: 13,
    paddingHorizontal: spacing.xs,
    
    backgroundColor: colors.input_bg,
    position: 'absolute',
    left: 25,
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
  message_error: {
    color: colors.error_bg,
    marginHorizontal: spacing.lg,
  },
  
  select_options: {
    backgroundColor: colors.primary_bg,
    borderColor: colors.container_color,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  select_list: {
    paddingVertical: padding.sm,
    paddingHorizontal: padding.md,
    borderBottomColor: colors.primary_bg,
    borderBottomWidth: 1,
  },

});

export default styles;
