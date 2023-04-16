import {useContainerMaskStyles} from '@src/styles';
import {StyleSheet} from 'react-native';
import {MenuItemCardProps} from './menu-item-card.type';

export const IMAGE_ACTUAL_DIMENSIONS = {
  actualHeight: 120,
  actualWidth: 186,
};

export const MENU_ITEM_CONTAINER_WIDTH = 240;
export const MENU_ITEM_CONTAINER_HEIGHT = 240;

export const useStyles = (_: MenuItemCardProps) => {
  const {lightMask} = useContainerMaskStyles();

  return StyleSheet.create({
    container: {
      position: 'relative',
      width: MENU_ITEM_CONTAINER_WIDTH,
      height: MENU_ITEM_CONTAINER_HEIGHT,
      ...lightMask,
    },
    image: {
      borderRadius: lightMask.borderRadius,
    },
    detailsContainer: {
      paddingTop: 12,
      width: '100%',
    },
    subDetailsContainer: {
      width: '100%',
    },
  });
};
