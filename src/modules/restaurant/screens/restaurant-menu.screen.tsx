import {useCurrentRestaurant} from '@src/modules/order/hooks';
import React, {FC} from 'react';
import {
  BottomTabBarScreenContainer,
  ScrollViewContainer,
} from '../../../components';
import {NavigationScreenName} from '../../../constants/enums';
import {RootNavigationScreenProps} from '../../../types';
import {
  RestaurantMenuCategories,
  RestaurantMenuHeader,
  RestaurantMenuList,
} from '../containers';

const RestaurantMenuScreen: FC<
  RootNavigationScreenProps<NavigationScreenName.RESTAURANT_MENU>
> = () => {
  const rest = useCurrentRestaurant();
  if (rest) {
    return (
      <BottomTabBarScreenContainer>
        <ScrollViewContainer alignItems="flex-start" stickyHeaderIndices={[1]}>
          <RestaurantMenuHeader />
          <RestaurantMenuCategories />
          <RestaurantMenuList />
        </ScrollViewContainer>
      </BottomTabBarScreenContainer>
    );
  }

  return null;
};

export default RestaurantMenuScreen;
