import {View, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {isIphoneX} from 'react-native-iphone-x-helper';

import AppText, {IAppTextProps} from './AppText';
import {AppTheme} from 'Assets';

const {height} = Dimensions.get('screen');

interface IAppHeaderProps {
  label?: string;
  labelProps?: IAppTextProps;
  leftAccessory?: React.ReactElement;
  rightAccessory?: React.ReactElement;
  backgroundColor?: string;
  showDropShadow?: boolean;
}

const AppHeader = (props: IAppHeaderProps) => {
  const {leftAccessory, rightAccessory, label, labelProps, backgroundColor = AppTheme.colors.white, showDropShadow = false} = props;
  const styles = makeStyles(showDropShadow);
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <View style={styles.content}>
        <View style={styles.leftContent}>{leftAccessory}</View>

        <AppText kind="Medium" size={18} {...labelProps}>
          {label}
        </AppText>

        <View style={styles.rightContent}>{rightAccessory}</View>
      </View>
    </View>
  );
};

export default AppHeader;

const makeStyles = (showDropShadow: boolean) =>
  StyleSheet.create({
    leftContent: {flex: 0.5},
    rightContent: {flex: 0.5, alignItems: 'flex-end'},

    content: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 30,
      height: 60,
    },

    container: {
      alignItems: 'flex-end',
      paddingTop: isIphoneX() ? height * 0.04 : height * 0.015,
      ...(showDropShadow && {
        elevation: 1,
        shadowColor: AppTheme.colors.black,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.1,
        shadowRadius: 1,
      }),
    },
  });
