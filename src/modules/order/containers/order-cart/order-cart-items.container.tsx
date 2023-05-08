import {
  FlexContainer,
  PriceTag,
  ScrollViewContainer,
  Spacer,
  StyledText,
} from '@src/components';
import {StyledButton} from '@src/components/common/styled-button';
import {OrderStatus} from '@src/constants/enums';
import {useTranslate} from '@src/hooks';
import {orderStoreActions, orderStoreSelectors} from '@src/store';
import React, {Fragment} from 'react';
import {OrderItemCardComponent} from '../../components/order-item';

const OrderCartItemsContainer = () => {
  // utils
  const t = useTranslate();
  // state
  const orders = orderStoreSelectors.useOrders();
  const totalPrice = orderStoreSelectors.useTotalPrice();
  const emptyOrders = orderStoreActions.useEmptyOrders();
  const setOrderStatus = orderStoreActions.useSetOrderStatus();

  // actions
  const handleCancelClick = () => {
    emptyOrders();
  };

  const handleOrderBtnPress = () => {
    setOrderStatus(OrderStatus.REQUESTED);
  };

  return (
    <>
      <ScrollViewContainer justifyContent="flex-start" alignItems="center">
        <Spacer height={12} />
        <FlexContainer spacing={'md'} flexDirection="row">
          <StyledText
            fullWidth
            content={t('orderScreen:title')}
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
            content={`${t('common:total')} - `}
            size="lg"
            weight="semi-bold"
            color="textGray"
          />
          <PriceTag styledTextProps={{size: 'lg'}} content={totalPrice} />
        </FlexContainer>
        <Spacer height={24} />
        <StyledButton
          onPress={handleOrderBtnPress}
          color="primary"
          content={t('common:order')}
          isFlat
          size="md"
        />
        <Spacer height={8} />
        <StyledButton
          onPress={handleCancelClick}
          color="background"
          textColor="error"
          content={t('common:cancel')}
          isFlat
          size="md"
        />

        <Spacer height={32} />
      </ScrollViewContainer>
    </>
  );
};

export default OrderCartItemsContainer;
