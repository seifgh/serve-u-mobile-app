import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {BottomTabBar} from '@src/components';
import {BagIcon, MenuIcon} from '@src/components/icons';
import {NavigationScreenName} from '@src/constants/enums';
import {useTranslate} from '@src/hooks/i18n';
import {OrderCartScreen} from '@src/modules';
import {orderStoreSelectors} from '@src/store';
import {TabBarStackParamList} from '@src/types';
import React, {useCallback} from 'react';
import RestaurantNavigator from './restaurant.navigator';

const TabBar = createBottomTabNavigator<TabBarStackParamList>();

const TabBarNavigator = () => {
  // utils
  const t = useTranslate('titles');
  const totalOrders = orderStoreSelectors.useTotalItems();

  // render
  const renderCustomTabBar = useCallback(
    (props: BottomTabBarProps) => <BottomTabBar {...props} />,
    [],
  );

  return (
    <TabBar.Navigator
      tabBar={renderCustomTabBar}
      screenOptions={{headerShown: false}}>
      <TabBar.Screen
        name={NavigationScreenName.RESTAURANT_STACK}
        component={RestaurantNavigator}
        options={{
          title: t('menu'),
          tabBarIcon: MenuIcon,
        }}
      />
      <TabBar.Screen
        name={NavigationScreenName.ORDER_CART}
        component={OrderCartScreen}
        options={{
          title: t('order'),
          tabBarIcon: BagIcon,
          tabBarBadge: totalOrders,
        }}
      />
    </TabBar.Navigator>
  );
};

export default TabBarNavigator;
