import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Case, Default, Else, If, Switch, Then} from 'react-if';

import AuthNavigator from './AuthNavigator';
import {APP_ROLES, isEmptyOrNill} from 'utils';
import EmployerNavigator from './EmployerNavigator';
import {NavigationService} from 'Services';

import WorkerDrawerNavigator from './DrawerNavigator/WorkerDrawerNavigator';
import useAppContext from 'Context';

const role = APP_ROLES.WORKER;

const Navigation = () => {
  const {
    state: {user},
  } = useAppContext();
  const isLoggedIn = !isEmptyOrNill(user);

  return (
    <NavigationContainer ref={NavigationService.navigationRef}>
      <If condition={isLoggedIn}>
        <Then>
          <Switch>
            <Case condition={role === APP_ROLES.WORKER}>
              <WorkerDrawerNavigator />
            </Case>
            <Case condition={role === APP_ROLES.EMPLOYER}>
              <EmployerNavigator />
            </Case>
            <Default>
              <WorkerDrawerNavigator />
            </Default>
          </Switch>
        </Then>

        <Else>
          <AuthNavigator />
        </Else>
      </If>
    </NavigationContainer>
  );
};

export default Navigation;
