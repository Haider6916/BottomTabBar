import {I18nManager} from 'react-native';

export const SCREENS = {
  LANGUAGE_SELECTION_SCREEN: 'LANGUAGE_SELECTION_SCREEN',
  LOGIN_SCREEN: 'LOGIN_SCREEN',
  OTP_VERIFICATION_SCREEN: 'OTP_VERIFICATION_SCREEN',
  SIGNUP_SCREEN: 'SIGNUP_SCREEN',
  CREATE_PIN_SCREEN: 'CREATE_PIN_SCREEN',

  // worker
  WORKER_HOME_SCREEN: 'WORKER_HOME_SCREEN',
  WORKER_SEARCH_SCREEN: 'WORKER_SEARCH_SCREEN',
  WORKER_WALLET_SCREEN: 'WORKER_WALLET_SCREEN',
  ACTIVITIES_SCREEN: 'ACTIVITIES_SCREEN',
  WORKER_TABS: 'WORKER_TABS',

  // Employer
  EMPLOYER_HOME_SCREEN: 'EMPLOYER_HOME_SCREEN',
};

export const APP_ROLES = {
  WORKER: 'WORKER',
  EMPLOYER: 'EMPLOYER',
};

export const isRTL = I18nManager.isRTL;

export const APP_LANGUAGE_KEY = '@APP_LANGUAGE_KEY';

export const APP_LANGUAGES = {
  ENGLISH: 'en',
  URDU: 'urdu',
};

// must be coming from backend
export const ACCOUNT_TYPES = [
  {
    label: 'Kaarkun',
    value: 'kaarkun',
  },
  {
    label: 'Saarif',
    value: 'saarif',
  },
];
