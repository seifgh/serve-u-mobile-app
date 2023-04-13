import React from 'react';
import {RootContainer, ToasterContainer} from './components/containers';
import NavigationProvider from './navigation/navigation.provider';

import './locales';

const App = () => {
  return (
    <RootContainer>
      <NavigationProvider />
      <ToasterContainer />
    </RootContainer>
  );
};
export default App;
