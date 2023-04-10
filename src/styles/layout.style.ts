import {ContainerContentPosition} from '@src/types';
import {ViewStyle} from 'react-native';

const CONTAINER_STYLE_BY_POSITION: Record<ContainerContentPosition, ViewStyle> =
  {
    bl: {
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
    },
    br: {
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
    bc: {
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    tl: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    tr: {
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
    },
    tc: {
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    center: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

export const useContainerPositionStyle = (
  position: ContainerContentPosition,
): ViewStyle => {
  return CONTAINER_STYLE_BY_POSITION[position];
};
