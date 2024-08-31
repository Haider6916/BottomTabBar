import React from 'react';
import {View, TouchableOpacityProps, TouchableOpacity, StyleProp, ViewStyle, StyleSheet} from 'react-native';

import {AppTheme} from 'Assets';

interface IIconButtonProps extends TouchableOpacityProps {
  icon: React.ReactElement;
  contentStyle?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  size?: number;
}

const IconButton = (props: IIconButtonProps) => {
  const {icon, contentStyle, backgroundColor = AppTheme.colors.black, size = 40, activeOpacity = 0.7, ...rest} = props;
  const styles = makeStyles(backgroundColor, size);

  return (
    <TouchableOpacity activeOpacity={activeOpacity} {...rest}>
      <View style={[styles.container, contentStyle]}>{icon}</View>
    </TouchableOpacity>
  );
};

export default IconButton;

const makeStyles = (backgroundColor: string, size: number) =>
  StyleSheet.create({
    container: {
      backgroundColor,
      height: size,
      width: size,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
    },
  });
