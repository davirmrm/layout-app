import { StyleSheet } from 'react-native';
import { colors, dimensions, spacing } from '../../layout/appBase';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginBottom: spacing.xs,
    width: dimensions.fullWidth,
  },  
  header_titulo: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    lineHeight: 18,
    textAlign: 'center',
  },
  header_center: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header_center_normal: {
    paddingHorizontal: spacing.xxs,
    width: dimensions.fullWidth - 104,
  },
  header_center_full:{
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
    width: dimensions.fullWidth,

  },
  header_button: {
    flexDirection: 'row',
    alignItems: 'center',
    color: colors.color_05,
    height: 60,
    width: 52,
  },
  header_button_left: {
    justifyContent: 'flex-end',
  },
  header_button_right: {
    justifyContent: 'flex-start',
  },
  header_icon: {
    color: colors.color_05,
  },
});
