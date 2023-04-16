import {useStyledColors} from '@src/hooks';
import {SizeProp} from '@src/types';
import {StyleSheet} from 'react-native';
import {FlexContainerProps} from './flex-container.type';

export const CONTAINER_PADDING_BY_SIZE: Record<SizeProp, number> = {
  sm: 10,
  md: 20,
  lg: 30,
};

export const useStyles = (props: Partial<FlexContainerProps>) => {
  const styledColors = useStyledColors();

  const {
    alignContent = 'flex-start',
    justifyContent = 'flex-start',
    alignItems = 'flex-start',
    flex,
    flexBasis,
    flexDirection,
    flexGrow,
    flexShrink,
    flexWrap = 'wrap',
    alignSelf,
    columnGap,
    spacing,
    background,
    fullWidth,
  } = props;
  return StyleSheet.create({
    container: {
      alignContent,
      justifyContent,
      alignItems,
      flex,
      flexBasis,
      flexDirection,
      flexGrow,
      flexShrink,
      flexWrap,
      alignSelf,
      columnGap,
      padding: spacing ? CONTAINER_PADDING_BY_SIZE[spacing] : undefined,
      backgroundColor: background ? styledColors[background] : undefined,
      width: fullWidth ? '100%' : undefined,
    },
  });
};
