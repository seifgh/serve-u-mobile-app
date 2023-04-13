import {Colors} from '../types';

export const LIGHT_COLORS: Colors = {
  primary: '#6C63FF',
  success: '#06AE2B',
  error: '#E95454',
  white: '#FFFFFF',

  background: '#F8F8F8',
  modalBackground: 'rgba(0, 0, 0, 0.25)',

  borderGray: '#E4E4E4',

  text: '#343A40',
  textGray: '#AEAEAE',
  textLight: '#F8F8F8',
};
export const DARK_COLORS: Colors = {...LIGHT_COLORS};
export const LIGHT_INVERTED_COLORS: Colors = {
  primary: LIGHT_COLORS.background,
  success: LIGHT_COLORS.white,
  error: LIGHT_COLORS.white,
  white: LIGHT_COLORS.primary,

  background: LIGHT_COLORS.primary,
  modalBackground: LIGHT_COLORS.text,

  borderGray: LIGHT_COLORS.text,

  text: LIGHT_COLORS.white,
  textGray: LIGHT_COLORS.text,
  textLight: LIGHT_COLORS.text,
};

export const DARK_INVERTED_COLORS: Colors = {...LIGHT_INVERTED_COLORS};
