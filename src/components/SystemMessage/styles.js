import { Platform, StyleSheet } from 'react-native';
import { colors, dimensions, fonts, spacing } from '../../styles/appBase';

const styles = StyleSheet.create({
  modal_message_opacity:{
    backgroundColor: colors.background_opacity,
    position: 'absolute',
    width: dimensions.fullWidth,
    height: dimensions.fullHeight - 30,
    justifyContent: 'flex-end',
    flex: 1,
    zIndex: 9,
    bottom: 0,
  },
  modal_message: {
    backgroundColor: colors.container_bg,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
    paddingVertical: spacing.xxl,
    paddingHorizontal: spacing.lg,
    paddingBottom: Platform.OS === 'ios' ? 25 + spacing.xxl : 0 + spacing.xxl,
  },
  modal_message_text: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.color_04,
    fontWeight: "600",
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 24,
  },
  message_ico_border: {
    borderRadius: 50,
    color: colors.color_01,
    padding: spacing.sm,
    marginBottom: spacing.md,
  },
  message_ico_border_success: {
    backgroundColor: colors.primary_bg,
  },
  message_ico_border_error: {
    backgroundColor: colors.error_bg,
  },
  message_ico_border_warning: {
    backgroundColor: colors.warning_bg,
  },
});

export default styles;
