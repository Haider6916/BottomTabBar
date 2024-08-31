import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {When} from 'react-if';

import AppText, {IAppTextProps} from './AppText';
import Spacer from './Spacer';
import {ArrowLeftIcon} from 'Icons';
import {AppTheme} from 'Assets';
import {NavigationService} from 'Services';
import {useTranslation} from 'react-i18next';

interface IBackButtonProps {
  label?: string;
  labelProps?: IAppTextProps;
  iconColor?: string;
  showLabel?: boolean;
  onPress?: () => void;
}

const BackButton = (props: IBackButtonProps) => {
  const {label, showLabel = true, labelProps, iconColor = AppTheme.colors.text, onPress} = props;

  const {t} = useTranslation();
  const labelToDisplay = label ? label : t('back');

  const onButtonPress = () => {
    if (onPress) onPress();
    else NavigationService.goBack();
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onButtonPress} activeOpacity={0.6}>
      <Spacer right={10}>
        <ArrowLeftIcon color={iconColor} size={20} />
      </Spacer>
      <When condition={showLabel}>
        <AppText kind="Medium" size={17} {...labelProps}>
          {labelToDisplay}
        </AppText>
      </When>
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
