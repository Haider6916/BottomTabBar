import {Text} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';

import {AppHeader, DrawerButton, NotificationButton, ScreenWrapper} from 'Components';

const WorkerHomeScreen = () => {
  const {t} = useTranslation();
  return (
    <ScreenWrapper>
      <AppHeader label={t('kaarkun')} leftAccessory={<DrawerButton />} showDropShadow rightAccessory={<NotificationButton />} />

      <Text>WorkerHomeScreen</Text>
    </ScreenWrapper>
  );
};

export default WorkerHomeScreen;
