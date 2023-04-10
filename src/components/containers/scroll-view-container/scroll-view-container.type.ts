import {FlexStyle, ScrollViewProps} from 'react-native';

export type ScrollViewContainerProps = Partial<ScrollViewProps> & {
  alignItems?: FlexStyle['alignItems'];
  justifyContent?: FlexStyle['justifyContent'];
  alignContent?: FlexStyle['alignContent'];
};
