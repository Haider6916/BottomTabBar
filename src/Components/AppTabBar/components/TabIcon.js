import React from 'react';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';

import {AppTheme} from 'Assets';
import VectorIcon from 'Icons';

const TabIcon = ({activeIcon, focused, icon}) => {
  const iconName = focused ? activeIcon.name : icon.name;
  const iconType = focused ? activeIcon.iconType : icon.iconType;
  const iconColor = focused ? AppTheme.colors.black : AppTheme.colors.darkGray;
  const iconSize = focused ? 16 : 20;

  const animationStyle = useAnimatedStyle(() => ({
    transform: [{translateY: withTiming(focused ? 0 : 5)}],
  }));

  return (
    <Animated.View style={animationStyle}>
      <VectorIcon iconType={iconType} name={iconName} color={iconColor} size={iconSize} />
    </Animated.View>
  );
};

export default TabIcon;
