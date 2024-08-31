import {View, Text, StyleProp, ViewStyle, TextProps, StyleSheet, TouchableOpacity} from 'react-native';
import React, {PropsWithChildren, useMemo} from 'react';
import {Else, If, Then} from 'react-if';

import {AppTheme} from 'Assets';
import {isRTL} from 'utils';

export interface IAppTextProps {
  onPress?: () => void;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  containerStyle?: StyleProp<ViewStyle>;
  textAlign?: 'center' | 'left' | 'right' | 'justify' | 'auto';
  textDecorationLine?: 'underline' | 'none' | 'line-through';
  textTransform?: 'capitalize' | 'uppercase' | 'lowercase' | 'none';
  color?: string;
  size?: number;
  kind?: keyof typeof AppTheme.fonts;
  textProps?: TextProps;
  numberOfLines?: number;
}

const AppText = (props: PropsWithChildren<IAppTextProps>) => {
  const {
    children,
    color = AppTheme.colors.black,
    containerStyle,
    kind = 'Regular',
    leftIcon,
    numberOfLines,
    onPress,
    rightIcon,
    size = 16,
    textAlign = 'left',
    textDecorationLine = 'none',
    textProps,
    textTransform = 'none',
  } = props;
  const disabled = !onPress;

  const appTextStyles = useMemo(
    () =>
      StyleSheet.flatten([
        {
          fontFamily: AppTheme.fonts[kind],
          fontSize: size,
          textAlign: isRTL ? 'right' : textAlign,
          textTransform,
          textDecorationLine,
          color,
        },
      ]),
    [kind, size, textAlign, textTransform, textDecorationLine, color],
  );

  return (
    <If condition={disabled}>
      <Then>
        <View style={[styles.content, containerStyle]}>
          {leftIcon}
          <Text numberOfLines={numberOfLines} style={appTextStyles} {...textProps}>
            {children}
          </Text>
          {rightIcon}
        </View>
      </Then>

      <Else>
        <TouchableOpacity style={[styles.content, containerStyle]} onPress={onPress} activeOpacity={0.6}>
          {leftIcon}
          <Text numberOfLines={numberOfLines} style={appTextStyles} {...textProps}>
            {children}
          </Text>
          {rightIcon}
        </TouchableOpacity>
      </Else>
    </If>
  );
};

export default AppText;

const styles = StyleSheet.create({
  content: {flexDirection: 'row', alignItems: 'center'},
});
