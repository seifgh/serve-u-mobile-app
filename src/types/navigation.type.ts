import {NavigationProp} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FC} from 'react';
import {
  NavigationScreenName,
  NavigationStackId,
  UserRole,
} from '../constants/enums';

export type TabBarStackParamList = {
  [NavigationScreenName.RESTAURANT_QR_SCANNER]: undefined;
  [NavigationScreenName.ORDER_CART]: undefined;
};

export type RootNavigationParamList = TabBarStackParamList;

export type RootNavigationScreenProps<T extends NavigationScreenName> =
  NativeStackScreenProps<RootNavigationParamList, T>;

export type RootNavigationProps = NavigationProp<RootNavigationParamList>;

export type NavigationScreen = {
  stack?: NavigationStackId;
  name: NavigationScreenName;
  roles: UserRole[];
  component: FC<any>;
};
