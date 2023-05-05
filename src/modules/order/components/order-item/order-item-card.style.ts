import {SCREEN} from '@src/constants';
import {useContainerMaskStyles} from '@src/styles';
import {StyleSheet} from 'react-native';
import {OrderItemCardProps} from './order-item-card.type';

export const IMAGE_ACTUAL_DIMENSIONS = {
  actualHeight: 120,
  actualWidth: 186,
};
export const ORDER_ITEM_CARD_WIDTH = SCREEN.width * 0.9;
export const ORDER_ITEM_CARD_HEIGHT = 160;

export const useStyles = (_: OrderItemCardProps) => {
  const {lightMask} = useContainerMaskStyles();

  return StyleSheet.create({
    container: {
      position: 'relative',
      width: ORDER_ITEM_CARD_WIDTH,
      height: ORDER_ITEM_CARD_HEIGHT,
      ...lightMask,
    },
    image: {
      borderRadius: lightMask.borderRadius,
    },
    detailsContainer: {
      // paddingTop: 12,
      paddingLeft: 16,
      height: '100%',
      width: ORDER_ITEM_CARD_WIDTH * 0.55,
    },
    subDetailsContainer: {
      width: '100%',
    },
  });
};
