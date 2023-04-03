import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useStyledColors} from '../hooks';
import TabBarNavigator from './navigators/tab-bar.navigator';

const NavigationProvider = () => {
  // utils
  const styledColors = useStyledColors();

  // render
  return (
    <NavigationContainer
      theme={{
        colors: {
          background: styledColors.background,
          border: styledColors.background,
          card: styledColors.background,
          notification: styledColors.primary,
          primary: styledColors.primary,
          text: styledColors.text,
        },
        dark: styledColors.isDark,
      }}>
      <TabBarNavigator />
    </NavigationContainer>
  );
};

export default NavigationProvider;
