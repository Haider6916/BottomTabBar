import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SCREENS} from 'utils';
import {EmployerHomeScreen} from 'Screens';

const {Navigator, Screen} = createNativeStackNavigator();

const EmployerNavigator = () => {
  return (
    <Navigator screenOptions={{headerShown: false, animation: 'slide_from_bottom'}}>
      <Screen name={SCREENS.EMPLOYER_HOME_SCREEN} component={EmployerHomeScreen} />
    </Navigator>
  );
};

export default EmployerNavigator;
