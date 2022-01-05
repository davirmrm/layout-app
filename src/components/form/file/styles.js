import { Dimensions, StyleSheet } from 'react-native';
import { colors, fonts, margin, padding, spacing } from '../../../styles/appBase';

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
    top: '50%',
    marginTop: -10,
    right: 0,
  },
  input: {
    backgroundColor: colors.input_bg,
    borderWidth: 1,
    // borderColor: colors.input_primary,
    borderRadius: 50,

    // marginHorizontal: spacing.sm,


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

  link_arquivo: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: spacing.xs
  },
  link_text: {
    color: colors.primary_bg,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    lineHeight: 21,
    marginLeft: 8,
  },
  placeholder: {
    ...fonts.input16,
    color: colors.color_02,
  },
  fileName: {
    ...fonts.sans14,
    color: colors.color_02,
    marginLeft: spacing.xs,
  },
  addIcon: {
    alignSelf: 'flex-start',
    padding: 15,
  },
  modalContainer: {
    backgroundColor: colors.container_bg,
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xl,
  },
  modalTitle: {
    ...fonts.heading16,
    textAlign: 'center',
    color: colors.color_02,
    paddingVertical: spacing.sm,
    marginBottom: spacing.md,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  container_list: {
    borderBottomColor: colors.color_07,
    borderBottomWidth: 1,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.sm,
    paddingVertical: 12,
  },
  text: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    lineHeight: 16.8,
    color: colors.color_02,
    maxWidth: Dimensions.get('window').width - 134,
  },
});

export default styles;
