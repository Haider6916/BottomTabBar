import {Text} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';

import {AppHeader, DrawerButton, NotificationButton, ScreenWrapper} from 'Components';

const WorkerWalletScreen = () => {
  const {t} = useTranslation();
  return (
    <ScreenWrapper>
      <AppHeader label={t('wallet')} leftAccessory={<DrawerButton />} showDropShadow rightAccessory={<NotificationButton />} />
      <Text>WorkerWalletScreen</Text>
    </ScreenWrapper>
  );
};

export default WorkerWalletScreen;
