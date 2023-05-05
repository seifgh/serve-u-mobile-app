import {
  FlexContainer,
  PriceTag,
  ScrollViewContainer,
  Spacer,
  StyledText,
} from '@src/components';
import {StyledButton} from '@src/components/common/styled-button';
import {orderStoreActions, orderStoreSelectors} from '@src/store';
import React, {Fragment} from 'react';
import {OrderItemCardComponent} from '../../components/order-item';

const OrderCartItemsContainer = () => {
  const orders = orderStoreSelectors.useOrders();
  const totalPrice = orderStoreSelectors.useTotalPrice();
  const emptyOrders = orderStoreActions.useEmptyOrders();

  const handleCancelClick = () => {
    emptyOrders();
  };

  return (
    <>
      <ScrollViewContainer justifyContent="flex-start" alignItems="center">
        <Spacer height={12} />
        <FlexContainer spacing={'md'} flexDirection="row">
          <StyledText
            fullWidth
            content={'Order list'}
            size="2xl"
            weight="semi-bold"
          />
        </FlexContainer>
        {orders.map(order => (
          <Fragment key={order.item.id}>
            <OrderItemCardComponent {...order} />
            <Spacer height={12} />
          </Fragment>
        ))}

        <Spacer height={32} />

        <FlexContainer flexDirection="row" alignItems="center">
          <StyledText
            content={'TOTAL - '}
            size="lg"
            weight="semi-bold"
            color="textGray"
          />
          <PriceTag styledTextProps={{size: 'lg'}} content={totalPrice} />
        </FlexContainer>
        <Spacer height={24} />
        <StyledButton color="primary" content="Order" isFlat size="md" />
        <Spacer height={8} />
        <StyledButton
          onPress={handleCancelClick}
          color="background"
          textColor="error"
          content="Cancel"
          isFlat
          size="md"
        />

        <Spacer height={32} />
      </ScrollViewContainer>
    </>
  );
};

export default OrderCartItemsContainer;
