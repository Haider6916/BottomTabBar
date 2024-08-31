import React from 'react';

import IconButton from './IconButton';
import {DrawerIcon} from 'Icons';
import {AppTheme} from 'Assets';
import {NavigationService} from 'Services';

interface IDrawerButtonProps {
  onPress?: () => void;
}

const DrawerButton = (props: IDrawerButtonProps) => {
  const {onPress} = props;

  const handlePress = () => {
    if (onPress) onPress();
    else {
      NavigationService.openDrawer();
    }
  };
  return <IconButton onPress={handlePress} icon={<DrawerIcon size={20} color={AppTheme.colors.white} />} />;
};

export default DrawerButton;
