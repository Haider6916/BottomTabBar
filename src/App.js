import React from 'react';
import {QueryClientProvider} from '@tanstack/react-query';

import AppWrapper from './AppWrapper';
import {queryClient} from 'Services/ApiService/config';
import {AppContextProvider} from 'Context';
import ErrorBoundary from './ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <AppContextProvider>
        <QueryClientProvider client={queryClient}>
          <AppWrapper />
        </QueryClientProvider>
      </AppContextProvider>
    </ErrorBoundary>
  );
};

export default App;
