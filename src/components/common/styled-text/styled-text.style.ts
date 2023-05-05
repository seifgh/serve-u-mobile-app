import {useStyledColors} from '@src/hooks';
import {TextSizeProp, TextWeightProp} from '@src/types';
import {StyleSheet, TextStyle} from 'react-native';
import {StyledTextProps} from './styled-text.type';

const FONT_SIZES: Record<TextSizeProp, number> = {
  xs: 14,
  sm: 16,
  md: 18,
  lg: 20,
  xl: 24,
  '2xl': 30,
  '3xl': 36,
};

const LINE_HEIGHTS: Record<TextSizeProp, number> = {
  xs: 18,
  sm: 22,
  md: 26,
  lg: 28,
  xl: 30,
  '2xl': 36,
  '3xl': 40,
};

const FONT_WEIGHT: Record<TextWeightProp, TextStyle['fontWeight']> = {
  light: '300',
  base: 'normal',
  'semi-bold': '600',
  bold: 'bold',
};

export const useStyles = (props: StyledTextProps) => {
  const styledColors = useStyledColors();

  const {
    color = 'text',
    size = 'sm',
    weight = 'base',
    lineHeight,
    align = 'left',
    fullWidth = false,
  } = props;

  return StyleSheet.create({
    text: {
      color: styledColors[color],
      lineHeight: lineHeight || LINE_HEIGHTS[size],
      fontSize: FONT_SIZES[size],
      fontWeight: FONT_WEIGHT[weight],
      textAlign: align,
      width: fullWidth ? '100%' : undefined,
      ...props.style,
    },
  });
};
