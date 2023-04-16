import {FC} from 'react';
import {ImageSourcePropType} from 'react-native';
import {Colors, DimensionsStyle} from './styles.type';

export type ComponentBaseProps = {
  children?: JSX.Element | JSX.Element[];
};

export type SvgIconProps = Partial<DimensionsStyle> & {
  color: string;
};

export type ContainerContentPosition =
  | 'tl'
  | 'tr'
  | 'bl'
  | 'br'
  | 'tc'
  | 'bc'
  | 'center';
export type SizeProp = 'sm' | 'md' | 'lg';
export type DirectionProp = 'l' | 'r';
export type TextSizeProp = 'xs' | SizeProp | 'xl' | '2xl' | '3xl';
export type TextWeightProp = 'light' | 'base' | 'semi-bold' | 'bold';
export type ColorProp = keyof Colors;
export type IconComponent = FC<SvgIconProps>;
export type ImageProp<S = ImageSourcePropType> = {
  src: S;
  actualWidth: number;
  actualHeight: number;
};
