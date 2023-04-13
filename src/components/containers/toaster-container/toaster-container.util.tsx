import {Colors} from '@src/types';
import React from 'react';
import {
  BaseToast,
  ToastConfig,
  ToastConfigParams,
} from 'react-native-toast-message';

const getBaseToastByColor = (colors: Colors, colorKey: keyof Colors) => {
  return (props: ToastConfigParams<any>) => (
    <BaseToast {...props} style={{borderLeftColor: colors[colorKey]}} />
  );
};

export const getToastConfigs = (
  colors: Colors,
  colorsKeys: (keyof Colors)[],
): ToastConfig => {
  const configs: ToastConfig = {};
  colorsKeys.forEach(key => (configs[key] = getBaseToastByColor(colors, key)));
  return configs;
};
