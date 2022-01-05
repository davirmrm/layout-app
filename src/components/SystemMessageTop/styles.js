import { Platform, StyleSheet } from 'react-native';
import { colors, dimensions, fonts, spacing } from '../../styles/appBase';

const styles = StyleSheet.create({
  mensagemChamada: {
    backgroundColor: colors.error_bg,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  mensagemChamadaText: {
    ...fonts.monserratNormald16,
    color: colors.error_color,
  },
});

export default styles;
