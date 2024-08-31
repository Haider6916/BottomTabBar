import {APP_CONTEXT_TYPES} from './types';

export const initialState = {
  isLoading: false,
  user: null,
  app_language: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_CONTEXT_TYPES.START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case APP_CONTEXT_TYPES.STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case APP_CONTEXT_TYPES.ADD_USER:
      return {
        ...state,
        user: action.payload,
      };
    case APP_CONTEXT_TYPES.DELETE_USER:
      return {
        ...state,
        user: null,
      };
    case APP_CONTEXT_TYPES.UPDATE_APP_LANGUAGE:
      return {
        ...state,
        app_language: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
