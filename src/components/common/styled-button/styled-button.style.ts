import {useStyledColors} from '@src/hooks';
import {useStyledInvertedColors} from '@src/hooks/styles/use-styled-inverted-colors.hook';
import {SizeProp} from '@src/types';
import {StyleSheet, ViewStyle} from 'react-native';
import {StyledButtonProps} from './styled-button.type';

const CONTAINER_STYLES_BY_SIZE: Record<SizeProp, ViewStyle> = {
  sm: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 14,
  },
  md: {
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 18,
  },
  lg: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 24,
  },
};

export const useStyles = (props: StyledButtonProps) => {
  const styledColors = useStyledColors();
  const styledInvertedColors = useStyledInvertedColors();
  const {color = 'primary', size = 'md', isFlat} = props;

  return StyleSheet.create({
    container: {
      backgroundColor: styledColors[color],
      justifyContent: 'center',
      alignItems: 'center',
      ...CONTAINER_STYLES_BY_SIZE[size],
      ...(isFlat
        ? {
            minWidth: '60%',
          }
        : {}),
    },
    text: {
      color: styledInvertedColors[color],
    },
  });
};
