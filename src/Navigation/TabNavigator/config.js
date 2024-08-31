import {isIphoneX} from 'react-native-iphone-x-helper';

import {ActivitiesScreen, WorkerHomeScreen, WorkerSearchScreen, WorkerWalletScreen} from 'Screens';
import {SCREENS} from 'utils';

export const WORKER_TABS_CONFIG = [
  {
    route: SCREENS.WORKER_HOME_SCREEN,
    label: 'home',
    component: WorkerHomeScreen,
    activeIcon: {name: 'home', iconType: 'Entypo'},
    icon: {name: 'home', iconType: 'SimpleLineIcons'},
  },
  {
    route: SCREENS.ACTIVITIES_SCREEN,
    label: 'activities',
    component: ActivitiesScreen,
    activeIcon: {name: 'clock-time-four', iconType: 'MaterialCommunityIcons'},
    icon: {name: 'clock-time-four-outline', iconType: 'MaterialCommunityIcons'},
  },
  {
    route: SCREENS.WORKER_SEARCH_SCREEN,
    label: 'search',
    component: WorkerSearchScreen,
    activeIcon: {name: 'search', iconType: 'Feather'},
    icon: {name: 'search', iconType: 'Feather'},
  },
  {
    route: SCREENS.WORKER_WALLET_SCREEN,
    label: 'wallet',
    component: WorkerWalletScreen,
    activeIcon: {name: 'wallet', iconType: 'Ionicons'},
    icon: {name: 'wallet-outline', iconType: 'Ionicons'},
  },
];

export const BOTTOM_INSETS = isIphoneX() ? 25 : 5;
