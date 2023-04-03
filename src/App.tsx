import React from 'react';
import {RootContainer} from './containers';
import NavigationProvider from './navigation/navigation.provider';
import './locales';

const App = () => {
  return (
    <RootContainer>
      <NavigationProvider />
    </RootContainer>
  );
};
export default App;
