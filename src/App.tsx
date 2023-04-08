import React from 'react';
import {RootContainer} from './components/containers';
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
