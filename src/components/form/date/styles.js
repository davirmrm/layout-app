import { StyleSheet } from 'react-native';
import { colors, dimensions, fonts, spacing } from '../../../styles/appBase';

const styles = StyleSheet.create({
  calendar: {
  },
  header_calendar: {
    padding: spacing.sm,
  },
  header_calendarBtnLeft: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header_calendarBtnRight: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header_text: {
    ...fonts.monserratNormal18,
    color: colors.color_05,
    justifyContent: 'center',
    textAlign: 'center',
  },
  row: {
    flexDirection: "row",
  },
  calendar_monsts: {
    margin: spacing.xxs,
    minWidth: '46%',
  },
  monts: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  week: {
    color: colors.color_03,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '14.28%',
  },
  day: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '14.28%',
    height: 40,
  },
  day_text: {
    padding: spacing.xxs,
  },
  day_atual: {
    color: colors.primary_bg,
  },
  mes_atual: {
    color: colors.color_05,
  },
  mes_aleatorio: {
    color: colors.color_03,
  }
});

export default styles;
