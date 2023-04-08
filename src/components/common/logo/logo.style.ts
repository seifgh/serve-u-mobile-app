import {logoImageAsset} from '@src/assets';
import {DimensionsStyle, SizeProp} from '@src/types';
import {imagesUtil} from '@src/utils';
import {StyleSheet} from 'react-native';
import {LogoProps} from './logo.type';

const DIMENSIONS_BY_SIZE: Record<SizeProp, DimensionsStyle> = {
  sm: {
    ...imagesUtil.getImageAutoHeightDimensions(logoImageAsset, 160),
  },
  md: {
    ...imagesUtil.getImageAutoHeightDimensions(logoImageAsset, 220),
  },
  lg: {
    ...imagesUtil.getImageAutoHeightDimensions(logoImageAsset, 300),
  },
};

export const useStyles = (props: LogoProps) => {
  const dimensions = DIMENSIONS_BY_SIZE[props.size];

  return StyleSheet.create({
    container: {...dimensions},
    image: {...dimensions},
  });
};
