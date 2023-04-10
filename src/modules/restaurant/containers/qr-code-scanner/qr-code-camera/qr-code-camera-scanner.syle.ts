import {useStyledSizes} from '@src/hooks';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const {
    screen: {width: screenWidth},
  } = useStyledSizes();

  return StyleSheet.create({
    cameraContainer: {
      overflow: 'hidden',
      borderRadius: 12,
      width: screenWidth * 0.9,
      height: screenWidth * 0.9,
    },
    camera: {
      width: screenWidth * 0.9,
      height: screenWidth * 1.2,
    },
  });
};
