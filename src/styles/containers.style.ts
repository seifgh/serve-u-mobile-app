import {useStyledColors} from '@src/hooks';
import {StyleSheet} from 'react-native';

export const useContainerMaskStyles = () => {
  const styledColors = useStyledColors();

  return StyleSheet.create({
    lightMask: {
      borderColor: styledColors.borderGray,
      backgroundColor: styledColors.white,
      borderWidth: 2,
      borderRadius: 12,
    },
  });
};
