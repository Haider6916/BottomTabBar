import {Text} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';

import {AppHeader, DrawerButton, NotificationButton, ScreenWrapper} from 'Components';

const ActivitiesScreen = () => {
  const {t} = useTranslation();

  return (
    <ScreenWrapper>
      <AppHeader label={t('activities')} leftAccessory={<DrawerButton />} showDropShadow rightAccessory={<NotificationButton />} />
      <Text>ActivitiesScreen</Text>
    </ScreenWrapper>
  );
};

export default ActivitiesScreen;
