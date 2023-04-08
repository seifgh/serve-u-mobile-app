import {ImageProp} from '@src/types';
import {ImageSourcePropType, ImageStyle} from 'react-native';

export type StyledImageProps = {
  image: ImageProp<ImageSourcePropType>;
  width?: number;
  maxWidth?: number;
  height?: number;
  maxHeight?: number;
  style?: ImageStyle;
};
