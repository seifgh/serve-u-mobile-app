import {ColorProp, SizeProp} from '@src/types';
import {TouchableOpacityProps} from 'react-native';

export type StyledButtonProps = TouchableOpacityProps & {
  content: string;
  color?: ColorProp;
  size?: SizeProp;
  isFlat?: boolean;
};
