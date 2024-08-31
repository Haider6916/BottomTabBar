import {View, Dimensions, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';

import {AppTheme} from 'Assets';
import TabButton from './components/TabButton';
import {isRTL} from 'utils';

const WIDTH = Dimensions.get('screen').width;
const SPACING = 35;

const AppTabBar = props => {
  const {descriptors, insets, navigation, state} = props;
  const [selectedTabIndex, setSelectedTabIndex] = useState(state.index);

  const routes = state.routes;
  const tabCount = state.routes.length;
  const buttonWrapperWidth = WIDTH - SPACING;
  const tabWidth = buttonWrapperWidth / tabCount;

  const animationStyles = useAnimatedStyle(() => ({
    transform: [{translateX: withTiming(tabWidth * selectedTabIndex, {duration: 400})}],
  }));

  const styles = makeStyles(tabWidth, buttonWrapperWidth);

  const onTabButtonPress = index => {
    navigation.navigate(routes[index].name);
    setSelectedTabIndex(index);
  };

  return (
    <View style={[styles.container, {paddingBottom: insets.bottom}]}>
      <View style={styles.buttonWrapper}>
        <Animated.View style={[styles.overlayContainer, animationStyles]} />
        {routes.map((route, index) => {
          const isFocused = selectedTabIndex === index;
          return (
            <TabButton
              width={tabWidth}
              key={route.key}
              isFocused={isFocused}
              icon={descriptors[route.key].options.tabBarIcon}
              label={descriptors[route.key].options.title || route.name}
              onPress={() => onTabButtonPress(index)}
            />
          );
        })}
      </View>
    </View>
  );
};

export default AppTabBar;

const makeStyles = (tabWidth, buttonWrapperWidth) =>
  StyleSheet.create({
    container: {
      backgroundColor: AppTheme?.colors.white,
      paddingTop: 15,
      paddingBottom: 5,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 16,
      shadowColor: AppTheme.colors.black,
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 10,
    },
    buttonWrapper: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      alignItems: 'center',
      alignSelf: 'center',
      width: buttonWrapperWidth,
    },
    overlayContainer: {
      backgroundColor: AppTheme?.colors.primary,
      width: tabWidth,
      borderRadius: 20,
      position: 'absolute',
      top: 0,
      botttom: 0,
      left: 0,
      right: 0,
      height: 45,
    },
  });
