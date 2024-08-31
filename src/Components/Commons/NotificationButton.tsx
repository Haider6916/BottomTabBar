import React from 'react';

import IconButton from './IconButton';
import {BellIcon} from 'Icons';
import {AppTheme} from 'Assets';

interface INotificationButtonProps {
  onPress?: () => void;
}

const NotificationButton = (props: INotificationButtonProps) => {
  const {onPress} = props;

  return <IconButton onPress={onPress} icon={<BellIcon size={20} color={AppTheme.colors.white} />} />;
};

export default NotificationButton;
