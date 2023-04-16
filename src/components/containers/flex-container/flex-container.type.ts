import {ColorProp, SizeProp} from '@src/types';
import {ReactNode} from 'react';
import {FlexStyle, ViewProps} from 'react-native';

export type FlexContainerProps = Partial<ViewProps> &
  FlexStyle & {
    spacing?: SizeProp;
    background?: ColorProp;
    children?: ReactNode;
    fullWidth?: boolean;
  };
