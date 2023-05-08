import {
  FlexContainer,
  PriceTag,
  Spacer,
  StyledImage,
  StyledText,
} from '@src/components';
import {StyledCounter} from '@src/components';
import {orderStoreActions} from '@src/store';
import React, {FC} from 'react';
import {
  IMAGE_ACTUAL_DIMENSIONS,
  ORDER_ITEM_CARD_HEIGHT,
  ORDER_ITEM_CARD_WIDTH,
  useStyles,
} from './order-item-card.style';
import {OrderItemCardProps} from './order-item-card.type';

const OrderItemCardComponent: FC<OrderItemCardProps> = props => {
  const {
    item: {id, image, name, price},
    disableEdit,
    quantity,
  } = props;

  const {incrementQuantity, decrementQuantity} =
    orderStoreActions.useOrderItemActions(id);

  // render
  const styles = useStyles(props);

  return (
    <FlexContainer
      style={styles.container}
      spacing="sm"
      flexDirection="row"
      flexWrap="nowrap"
      alignContent="center"
      alignItems="center">
      <StyledImage
        style={styles.image}
        image={{
          ...IMAGE_ACTUAL_DIMENSIONS,
          src: {
            uri:
              // 'https://lh5.googleusercontent.com/p/AF1QipMG2QUTWQfHGard48Q08OFdwjGlIZxnmt5Gl3-d=w114-h114-n-k-no' ||
              image.path,
          },
        }}
        width={ORDER_ITEM_CARD_WIDTH * 0.45}
        height={ORDER_ITEM_CARD_HEIGHT - 24}
      />
      <FlexContainer style={styles.detailsContainer} justifyContent="center">
        <StyledText
          content={name}
          size="md"
          weight="semi-bold"
          numberOfLines={1}
        />
        <Spacer height={4} />
        <PriceTag content={price} />
        <Spacer height={12} />

        <StyledCounter
          disabled={disableEdit}
          onIncrement={incrementQuantity}
          onDecrement={decrementQuantity}
          value={quantity}
        />
        <Spacer height={4} />

        <FlexContainer flexDirection="row" alignItems="center">
          <StyledText
            content={'TOTAL - '}
            size="xs"
            weight="semi-bold"
            color="textGray"
          />
          <PriceTag content={price * quantity} />
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default OrderItemCardComponent;
