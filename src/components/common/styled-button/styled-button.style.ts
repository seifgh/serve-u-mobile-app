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

const ICON_ONLY_CONTAINER_STYLES_BY_SIZE: Record<SizeProp, ViewStyle> = {
  sm: {
    padding: 6,
    borderRadius: 12,
  },
  md: {
    padding: 8,
    borderRadius: 16,
  },
  lg: {
    padding: 12,
    borderRadius: 20,
  },
};

const ICON_DIMENSION_BY_SIZE: Record<SizeProp, number> = {
  sm: 24,
  md: 28,
  lg: 32,
};

export const useStyles = (props: StyledButtonProps) => {
  const styledColors = useStyledColors();
  const styledInvertedColors = useStyledInvertedColors();
  const {
    color = 'primary',
    textColor,
    size = 'md',
    isFlat,
    iconDirection = 'r',
    hasBorder,
  } = props;

  // computed
  const hasIcon = !!props.icon;
  const hasText = !!props.content;
  const isIconTextBtn = hasIcon && hasText;
  const isIconBtn = hasIcon && !hasText;
  const hastLeftIcon = isIconTextBtn && iconDirection === 'l';
  const hasRightIcon = isIconTextBtn && iconDirection === 'r';

  // styles
  const iconDimensions = ICON_DIMENSION_BY_SIZE[size];
  const textColorStyle = textColor
    ? styledColors[textColor]
    : styledInvertedColors[color];
  const containerStylesBySize = isIconBtn
    ? ICON_ONLY_CONTAINER_STYLES_BY_SIZE[size]
    : CONTAINER_STYLES_BY_SIZE[size];
  const flatStyles = isFlat
    ? {
        minWidth: '60%',
      }
    : null;

  const borderStyles = hasBorder
    ? {
        borderWidth: 2,
        borderColor: styledColors.borderGray,
      }
    : null;

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: styledColors[color],
      justifyContent: 'center',
      alignItems: 'center',
      ...containerStylesBySize,
      ...flatStyles,
      ...borderStyles,
    },
    text: {
      color: textColorStyle,
      paddingRight: hasRightIcon ? 12 : 0,
      paddingLeft: hastLeftIcon ? 12 : 0,
    },
    icon: {
      color: textColorStyle,
      width: iconDimensions,
      height: iconDimensions,
    },
  });
};
