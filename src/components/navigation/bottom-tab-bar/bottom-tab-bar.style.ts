import {useStyledColors, useStyledSizes} from '@src/hooks';
import {StyleSheet} from 'react-native';
import {BottomTabBarProps} from './bottom-tab-bar.type';

const BORDER_WIDTH = 1;

export const useStyles = (_: Partial<BottomTabBarProps>) => {
  const styledColors = useStyledColors();
  const styledSizes = useStyledSizes();

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
      height: styledSizes.bottomTabBarHeight - BORDER_WIDTH,
      backgroundColor: styledColors.white,
      borderTopWidth: BORDER_WIDTH,
      borderColor: styledColors.borderGray,
    },
  });
};
