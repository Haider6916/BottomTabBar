import {ViewStyle, StyleProp, TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';
import {When} from 'react-if';

import AppText, {IAppTextProps} from './AppText';
import {AppTheme} from 'Assets';
import {getAlphaColor} from 'utils';
import Spacer from './Spacer';

interface IAppButtonProps {
  title: string;
  onPress: () => void;
  color?: string;
  leftAccessory?: React.ReactElement;
  rightAccessory?: React.ReactElement;
  titleProps?: Omit<IAppTextProps, 'leftIcon' | 'rightIcon'>;
  outlined?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

const AppButton = (props: IAppButtonProps) => {
  const {onPress, title, titleProps, outlined = false, color = AppTheme.colors.black, leftAccessory, rightAccessory, isLoading = false, disabled = false, style} = props;

  const buttonAccessorycolor = disabled ? AppTheme.colors.placeholder : outlined ? color : AppTheme.colors.white;

  const styles = makeStyles(outlined, disabled, color);

  return (
    <TouchableOpacity style={[styles.container, style]} activeOpacity={0.6} disabled={disabled} onPress={onPress}>
      <When condition={leftAccessory !== null && !isLoading}>
        <Spacer right={15}>{leftAccessory}</Spacer>
      </When>
      <When condition={isLoading && !disabled}>
        <Spacer right={15}>
          <ActivityIndicator color={buttonAccessorycolor} size={20} />
        </Spacer>
      </When>

      <AppText kind="Medium" color={buttonAccessorycolor} {...titleProps}>
        {title}
      </AppText>

      <When condition={rightAccessory !== null}>
        <Spacer left={15}>{rightAccessory}</Spacer>
      </When>
    </TouchableOpacity>
  );
};

export default AppButton;

const makeStyles = (outlined: boolean, disabled: boolean, color: string) =>
  StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: disabled ? AppTheme.colors.grey : outlined ? getAlphaColor(color, 0.05) : color,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      ...((outlined || disabled) && {
        borderColor: disabled ? AppTheme.colors.placeholder : color,
      }),
      ...((outlined || disabled) && {borderWidth: 0.5}),
      height: 50,
    },
  });
