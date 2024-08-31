import React, {createContext, useReducer} from 'react';

import {reducer, initialState} from './reducer';
import {APP_CONTEXT_TYPES} from './types';

export const AppContext = createContext();

const AppContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const storeUser = user => {
    dispatch({type: APP_CONTEXT_TYPES.ADD_USER, payload: user});
  };
  const deleteUser = () => {
    dispatch({type: APP_CONTEXT_TYPES.DELETE_USER});
  };

  const startLoading = () => {
    dispatch({type: APP_CONTEXT_TYPES.START_LOADING});
  };

  const stopLoading = () => {
    dispatch({type: APP_CONTEXT_TYPES.STOP_LOADING});
  };

  const updateAppLanguage = lng => {
    dispatch({type: APP_CONTEXT_TYPES.UPDATE_APP_LANGUAGE, payload: lng});
  };

  const value = {state, storeUser, deleteUser, startLoading, stopLoading, updateAppLanguage};

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
