import {BottomTabBarScreenContainer} from '@src/components/containers';
import React, {FC} from 'react';
import {NavigationScreenName} from '../../../constants/enums';
import {RootNavigationScreenProps} from '../../../types';
import {EmptyOrderContainer} from '../containers';

const OrderCartScreen: FC<
  RootNavigationScreenProps<NavigationScreenName.ORDER_CART>
> = () => {
  return (
    <BottomTabBarScreenContainer>
      <EmptyOrderContainer />
    </BottomTabBarScreenContainer>
  );
};

export default OrderCartScreen;
