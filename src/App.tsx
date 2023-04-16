import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {RootContainer, ToasterContainer} from './components/containers';
import './locales';
import NavigationProvider from './navigation/navigation.provider';

const queryClient = new QueryClient();

const App = () => {
  return (
    <RootContainer>
      <QueryClientProvider client={queryClient}>
        <NavigationProvider />
      </QueryClientProvider>
      <ToasterContainer />
    </RootContainer>
  );
};
export default App;
