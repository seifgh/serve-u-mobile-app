import {DimensionsStyle} from '@src/types';
import {imagesUtil} from '@src/utils';
import {StyleSheet} from 'react-native';
import {StyledImageProps} from './styled-image.type';

const getImageDimensions = (props: StyledImageProps): DimensionsStyle => {
  const {image, height, maxHeight, maxWidth, width} = props;

  if (height !== undefined && width !== undefined) {
    return {height, width};
  }

  if (height !== undefined) {
    return {
      ...imagesUtil.getImageAutoWidthDimensions(image, height, maxHeight),
    };
  }

  if (width !== undefined) {
    return {...imagesUtil.getImageAutoHeightDimensions(image, width, maxWidth)};
  }

  return {
    height: image.actualHeight,
    width: image.actualWidth,
  };
};

export const useStyles = (props: StyledImageProps) => {
  return StyleSheet.create({
    image: {
      ...getImageDimensions(props),
      ...props.style,
    },
  });
};
