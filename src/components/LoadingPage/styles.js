import { StyleSheet } from 'react-native';
import { colors, dimensions, spacing } from '../../layout/appBase';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary_bg,
    position: 'absolute',
    width: dimensions.fullWidth,
    height: dimensions.fullHeight,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    zIndex: 9,
  },
  loading: {

  },
  loading_text:{
    color: colors.primary_color,
    fontSize: 20,
    marginTop: spacing.md,
  },
});

export default styles;
