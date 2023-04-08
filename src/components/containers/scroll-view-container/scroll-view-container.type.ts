import {ScrollViewProps} from 'react-native/types';

export type ScrollViewContainerProps = Partial<ScrollViewProps> & {
  centerContent?: boolean;
};
