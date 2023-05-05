import {BottomTabBarScreenContainer} from '@src/components/containers';
import {orderStoreSelectors} from '@src/store';
import React, {FC} from 'react';
import {NavigationScreenName} from '../../../constants/enums';
import {RootNavigationScreenProps} from '../../../types';
import {EmptyOrderContainer, OrderCartItemsContainer} from '../containers';

const OrderCartScreen: FC<
  RootNavigationScreenProps<NavigationScreenName.ORDER_CART>
> = () => {
  const isEmpty = orderStoreSelectors.useIsEmpty();

  return (
    <BottomTabBarScreenContainer>
      {isEmpty ? <EmptyOrderContainer /> : <OrderCartItemsContainer />}
    </BottomTabBarScreenContainer>
  );
};

export default OrderCartScreen;
