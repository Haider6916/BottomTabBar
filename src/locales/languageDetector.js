import {I18nManager} from 'react-native';
import {useEffect} from 'react';

import {AsyncStorageService} from 'Services';
import {updateLanguage} from 'locales';
import {APP_LANGUAGES, APP_LANGUAGE_KEY} from 'utils';
import useAppContext from 'Context';

export const useDetectLanguage = () => {
  const {updateAppLanguage, startLoading, stopLoading} = useAppContext();

  useEffect(() => {
    let mounted = true;
    (async () => {
      if (mounted) {
        startLoading();
        const detectedLanguage = await AsyncStorageService.getData(APP_LANGUAGE_KEY);
        if (detectedLanguage) {
          updateLanguage(detectedLanguage);
          updateAppLanguage(detectedLanguage);
          detectedLanguage === APP_LANGUAGES.ENGLISH ? I18nManager.forceRTL(false) : I18nManager.forceRTL(true);
        }
      }
      stopLoading();
    })();
    return () => {
      mounted = false;
    };
  }, []);
};
