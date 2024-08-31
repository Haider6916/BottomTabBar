import React from 'react';

import Navigation from 'Navigation';
import {AppLoader} from 'Components';
import useAppContext from 'Context';

const AppWrapper = () => {
  const {
    state: {isLoading},
  } = useAppContext();

  return (
    <>
      <Navigation />
      <AppLoader isLoading={isLoading} />
    </>
  );
};

export default AppWrapper;
