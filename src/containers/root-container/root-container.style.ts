import {useStyledColors} from '@src/hooks';
import {StyleSheet} from 'react-native';
import {RootContainerProps} from './root-container.type';

export const useStyles = (_: Partial<RootContainerProps>) => {
  const styledColors = useStyledColors();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: styledColors.primary,
    },
  });
};
