import {createStackNavigator} from '@react-navigation/stack';
import {NavigationScreenName} from '@src/constants/enums';
import {QrCodeScannerScreen, RestaurantMenuScreen} from '@src/modules';
import {RestaurantStackNavigatorParamList} from '@src/types';
import React from 'react';

const RestaurantStackNavigator =
  createStackNavigator<RestaurantStackNavigatorParamList>();

const RestaurantNavigator = () => {
  return (
    <RestaurantStackNavigator.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={NavigationScreenName.RESTAURANT_QR_SCANNER}>
      <RestaurantStackNavigator.Screen
        name={NavigationScreenName.RESTAURANT_QR_SCANNER}
        component={QrCodeScannerScreen}
      />
      <RestaurantStackNavigator.Screen
        name={NavigationScreenName.RESTAURANT_MENU}
        component={RestaurantMenuScreen}
      />
    </RestaurantStackNavigator.Navigator>
  );
};

export default RestaurantNavigator;
