import React, {useMemo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SCREENS, isRTL} from 'utils';
import {CreatePinScreen, LoginScreen, OtpVerificaitonScreen, SelectLanguageScreen, SignupScreen} from 'Screens';
import useAppContext from 'Context';
import {useDetectLanguage} from 'locales/languageDetector';

const {Navigator, Screen} = createNativeStackNavigator();

const StackConfig = [
  {name: SCREENS.LOGIN_SCREEN, component: LoginScreen},
  {name: SCREENS.OTP_VERIFICATION_SCREEN, component: OtpVerificaitonScreen},
  {name: SCREENS.SIGNUP_SCREEN, component: SignupScreen},
  {name: SCREENS.CREATE_PIN_SCREEN, component: CreatePinScreen},
];

const AuthNavigator = () => {
  useDetectLanguage();
  const {
    state: {app_language},
  } = useAppContext();

  const config = useMemo(() => {
    return app_language ? StackConfig : [{name: SCREENS.LANGUAGE_SELECTION_SCREEN, component: SelectLanguageScreen}, ...StackConfig];
  }, [app_language]);

  return (
    <Navigator screenOptions={{headerShown: false, animation: isRTL ? 'slide_from_left' : 'slide_from_right'}}>
      {config.map((screen, index) => (
        <Screen key={index.toString() + screen.name} name={screen.name} component={screen.component} />
      ))}
    </Navigator>
  );
};

export default AuthNavigator;
