import React, {FC} from 'react';
import {Text} from '../../../components';
import {NavigationScreenName} from '../../../constants/enums';
import {RootNavigationScreenProps} from '../../../types';

const RestaurantMenuScreen: FC<
  RootNavigationScreenProps<NavigationScreenName.RESTAURANT_MENU>
> = ({
  route: {
    params: {restaurantId},
  },
}) => {
  return <Text>Restaurant Menu screen {restaurantId}</Text>;
};

export default RestaurantMenuScreen;
