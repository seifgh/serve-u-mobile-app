import {BottomTabBarScreenContainer} from '@src/components/containers';
import {orderStoreSelectors} from '@src/store';
import React, {FC, useMemo} from 'react';
import {NavigationScreenName, OrderStatus} from '../../../constants/enums';
import {RootNavigationScreenProps} from '../../../types';
import {
  EmptyOrderContainer,
  OrderCartItemsContainer,
  RequestedOrderContainer,
} from '../containers';
import ConfirmedOrderContainer from '../containers/order-cart/confirmed-order.container';

const OrderCartScreen: FC<
  RootNavigationScreenProps<NavigationScreenName.ORDER_CART>
> = () => {
  const isEmpty = orderStoreSelectors.useIsEmpty();
  const orderStatus = orderStoreSelectors.useGetState().status;

  // render
  const content = useMemo(() => {
    if (orderStatus === OrderStatus.WAITING_FOR_REQUEST) {
      return isEmpty ? <EmptyOrderContainer /> : <OrderCartItemsContainer />;
    }

    if (orderStatus === OrderStatus.REQUESTED) {
      return <RequestedOrderContainer />;
    }
    if (orderStatus === OrderStatus.CONFIRMED) {
      return <ConfirmedOrderContainer />;
    }
  }, [isEmpty, orderStatus]);

  return <BottomTabBarScreenContainer>{content}</BottomTabBarScreenContainer>;
};

export default OrderCartScreen;
