import { StyleSheet } from 'react-native';
import { colors, fonts, spacing } from '../../../layout/appBase';

export const styles = StyleSheet.create({
  form_box: {
    position: 'relative',
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
    borderRadius: spacing.xs,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    
    color: colors.color_02,
  },

  label: {
    fontSize: 13,
    lineHeight: 13,
    paddingHorizontal: spacing.xs,
    
    backgroundColor: colors.input_bg,
    zIndex: 2,
    paddingBottom: spacing.xs,
    paddingHorizontal: spacing.xs,
  },
 
  message_error: {
    color: colors.error_bg,
    marginHorizontal: spacing.lg,
  },



  
  container: {
    backgroundColor: colors.input_bg,
    borderColor: colors.input_secondary_color,
    borderRadius: 5,
    borderWidth: 2,
    height: 48,
    justifyContent: 'center',
    marginTop: spacing.xs,
    paddingHorizontal: spacing.sm,
  },
  hasError: {
    borderColor: colors.error_bg,
  },
  input16: fonts.input16,
  isFocused: {
    borderColor: colors.primary_bg,
  },
  label14: {
    ...fonts.label14,
    marginTop: spacing.md,
  },
});
