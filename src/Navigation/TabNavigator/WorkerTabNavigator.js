/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {useTranslation} from 'react-i18next';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {AppTabBar, TabIcon} from 'Components';
import {BOTTOM_INSETS, WORKER_TABS_CONFIG} from './config';

const {Navigator, Screen} = createBottomTabNavigator();

const WorkerTabNavigator = () => {
  const {t} = useTranslation();
  return (
    <Navigator screenOptions={{headerShown: false}} safeAreaInsets={{bottom: BOTTOM_INSETS}} tabBar={props => <AppTabBar {...props} />}>
      {WORKER_TABS_CONFIG.map((tab, index) => (
        <Screen
          key={index}
          name={tab.route}
          component={tab.component}
          options={{
            title: t(tab.label),
            tabBarIcon: ({focused}) => <TabIcon focused={focused} icon={tab.icon} activeIcon={tab.activeIcon} />,
          }}
        />
      ))}
    </Navigator>
  );
};

export default WorkerTabNavigator;
