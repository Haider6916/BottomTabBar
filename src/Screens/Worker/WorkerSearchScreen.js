import {Text} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';

import {AppHeader, DrawerButton, NotificationButton, ScreenWrapper} from 'Components';

const WorkerSearchScreen = () => {
  const {t} = useTranslation();
  return (
    <ScreenWrapper>
      <AppHeader label={t('search')} leftAccessory={<DrawerButton />} showDropShadow rightAccessory={<NotificationButton />} />
      <Text>WorkerSearchScreen</Text>
    </ScreenWrapper>
  );
};

export default WorkerSearchScreen;
