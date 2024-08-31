import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import WorkerTabNavigator from 'Navigation/TabNavigator/WorkerTabNavigator';

import {SCREENS} from 'utils';

const {Navigator, Screen} = createDrawerNavigator();

const WorkerDrawerNavigator = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name={SCREENS.WORKER_TABS} component={WorkerTabNavigator} />
    </Navigator>
  );
};

export default WorkerDrawerNavigator;
