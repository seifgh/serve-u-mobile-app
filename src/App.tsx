import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {RecoilRoot} from 'recoil';
import {RootContainer, ToasterContainer} from './components/containers';
import './locales';
import NavigationProvider from './navigation/navigation.provider';

const queryClient = new QueryClient();

const App = () => {
  return (
    <RootContainer>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <NavigationProvider />
        </QueryClientProvider>
        <ToasterContainer />
      </RecoilRoot>
    </RootContainer>
  );
};
export default App;
