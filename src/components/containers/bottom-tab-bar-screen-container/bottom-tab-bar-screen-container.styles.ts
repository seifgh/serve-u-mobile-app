import {useStyledColors, useStyledSizes} from '@src/hooks';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const styledColors = useStyledColors();
  const styledSizes = useStyledSizes();

  return StyleSheet.create({
    container: {
      backgroundColor: styledColors.background,
      height: styledSizes.bottomTabBarScreenHeight,
    },
  });
};
