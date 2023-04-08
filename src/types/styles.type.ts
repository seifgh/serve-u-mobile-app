import {ScaledSize} from 'react-native/types';

export type Colors = {
  primary: string;
  success: string;
  error: string;
  white: string;

  background: string;

  borderGray: string;

  text: string;
  textGray: string;
  textLight: string;
};

export type Sizes = {
  bottomTabBarHeight: number;
  bottomTabBarScreenHeight: number;
};

export type StyledColors = Colors & {
  isDark: boolean;
};

export type StyledSizes = Sizes & {
  screenHeight: number;
  window: ScaledSize;
  screen: ScaledSize;
  statusBarHeight: number;
};
export type DimensionValue = number | `${number}%`;

export type DimensionsStyle = {
  height: DimensionValue;
  width: DimensionValue;
};
