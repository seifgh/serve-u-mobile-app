import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {BagIcon, MenuIcon} from '@src/assets/icons';
import {BottomTabBar} from '@src/components';
import {NavigationScreenName} from '@src/constants/enums';
import {useTranslation} from '@src/hooks/i18n';
import {OrderCartScreen, QrCodeScannerScreen} from '@src/modules';
import {TabBarStackParamList} from '@src/types';
import React, {useCallback} from 'react';

const TabBar = createBottomTabNavigator<TabBarStackParamList>();

const TabBarNavigator = () => {
  // utils
  const {t} = useTranslation();

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
        name={NavigationScreenName.RESTAURANT_QR_SCANNER}
        component={QrCodeScannerScreen}
        options={{
          title: t('titles.menu') as string,
          tabBarIcon: MenuIcon,
        }}
      />
      <TabBar.Screen
        name={NavigationScreenName.ORDER_CART}
        component={OrderCartScreen}
        options={{
          title: t('titles.order') as string,
          tabBarIcon: BagIcon,
        }}
      />
    </TabBar.Navigator>
  );
};

export default TabBarNavigator;
