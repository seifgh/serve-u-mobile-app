import {BottomTabBarScreenContainer} from '@src/containers';
import React, {FC} from 'react';
import {Text} from '../../../components';
import {NavigationScreenName} from '../../../constants/enums';
import {RootNavigationScreenProps} from '../../../types';

const OrderCartScreen: FC<
  RootNavigationScreenProps<NavigationScreenName.ORDER_CART>
> = () => {
  return (
    <BottomTabBarScreenContainer>
      <Text>Order cart screen</Text>
    </BottomTabBarScreenContainer>
  );
};

export default OrderCartScreen;
