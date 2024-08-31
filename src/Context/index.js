import {useContext} from 'react';

import {AppContext} from './provider';
export {default as AppContextProvider} from './provider';
export {APP_CONTEXT_TYPES} from './types';

const useAppContext = () => {
  const appContext = useContext(AppContext);
  if (appContext === undefined) {
    throw new Error('useAppContext must be used within a Context Provider');
  }
  return appContext;
};

export default useAppContext;
