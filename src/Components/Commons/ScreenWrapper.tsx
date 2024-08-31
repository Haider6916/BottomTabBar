import React, {PropsWithChildren} from 'react';
import {Case, Default, Switch} from 'react-if';
import {View, ViewProps, ScrollViewProps, ScrollView, StatusBar, StyleSheet} from 'react-native';
import {KeyboardAwareScrollViewProps, KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {AppTheme} from 'Assets';

interface IScreenWrapperProps {
  type?: 'scroll' | 'none' | 'keyboard';
  viewProps?: ViewProps;
  scrollViewProps?: ScrollViewProps;
  keyboardAwareScrollViewProps?: KeyboardAwareScrollViewProps;
  barStyle?: 'dark-content' | 'default' | 'light-content';
  backgroundColor?: string;
  barColor?: string;
}

const ScreenWrapper = (props: PropsWithChildren<IScreenWrapperProps>) => {
  const {
    keyboardAwareScrollViewProps,
    scrollViewProps,
    type = 'none',
    viewProps,
    barStyle = 'dark-content',
    barColor = AppTheme.colors.white,
    backgroundColor = AppTheme.colors.backgroundColor,
    children,
  } = props;
  const styles = makeStyles(backgroundColor);

  return (
    <>
      <StatusBar barStyle={barStyle} backgroundColor={barColor} />
      <Switch>
        <Case condition={type === 'scroll'}>
          <ScrollView {...scrollViewProps} style={styles.scrollWrapper}>
            {children}
          </ScrollView>
        </Case>
        <Case condition={type === 'keyboard'}>
          <KeyboardAwareScrollView {...keyboardAwareScrollViewProps} style={styles.scrollWrapper}>
            {children}
          </KeyboardAwareScrollView>
        </Case>
        <Default>
          <View {...viewProps} style={styles.wrapper}>
            {children}
          </View>
        </Default>
      </Switch>
    </>
  );
};

export default ScreenWrapper;

const makeStyles = (backgroundColor: string) => StyleSheet.create({wrapper: {flex: 1, backgroundColor}, scrollWrapper: {backgroundColor}});
