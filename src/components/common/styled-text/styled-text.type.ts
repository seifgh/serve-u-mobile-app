import {ColorProp, TextSizeProp, TextWeightProp} from '@src/types';
import {TextStyle} from 'react-native';

export type StyledTextProps = {
  color?: ColorProp;
  size?: TextSizeProp;
  weight?: TextWeightProp;
  style?: TextStyle;
  lineHeight?: number;
  align?: TextStyle['textAlign'];
  content: string | string[];
  numberOfLines?: number;
  fullWidth?: boolean;
};
