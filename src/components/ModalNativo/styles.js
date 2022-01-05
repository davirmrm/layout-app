import { StyleSheet } from 'react-native';
import { colors, dimensions, spacing } from '../../layout/appBase';

export const styles = StyleSheet.create({
  modal_opacity: {
    backgroundColor: colors.background_opacity,
    position: 'absolute',
    width: dimensions.fullWidth,
    height: dimensions.fullHeight - 30,
    justifyContent: 'flex-end',
    flex: 1,
    zIndex: 7,
  },
  modal_opacity_action:{
    width: dimensions.fullWidth,
    height: dimensions.fullHeight - 30,
  },
  modal:{
    position: 'absolute',
    width: dimensions.fullWidth,
    height: dimensions.fullHeight - 30,
    justifyContent: 'flex-end',
    flex: 1,
    zIndex: 8,
  },
  modal_content: {
    backgroundColor: colors.container_bg,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    zIndex: 9,
    maxHeight: dimensions.fullHeight - 30,
  },
  modal_content_scroll: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
  },
  modal_content_full: {
    height: dimensions.fullHeight - 30,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
});
