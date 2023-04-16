import {ColorProp, DirectionProp, IconComponent, SizeProp} from '@src/types';
import {TouchableOpacityProps} from 'react-native';

export type StyledButtonProps = TouchableOpacityProps & {
  icon?: IconComponent;
  content?: string;
  color?: ColorProp;
  textColor?: ColorProp;
  size?: SizeProp;
  iconDirection?: DirectionProp;
  isFlat?: boolean;
  hasBorder?: boolean;
};
