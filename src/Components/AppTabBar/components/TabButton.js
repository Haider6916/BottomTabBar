import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {When} from 'react-if';

import {AppText} from 'Components';

const TabButton = ({width, isFocused, icon, label, onPress}) => {
  const styles = makeStyles(width);

  const animationStyle = useAnimatedStyle(() => ({
    transform: [{scale: withTiming(isFocused ? 1 : 0, {duration: 500})}],
  }));

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.container}>
      {icon({focused: isFocused})}

      <When condition={isFocused}>
        <Animated.View style={animationStyle}>
          <AppText size={10} kind={isFocused ? 'Medium' : 'Regular'}>
            {label}
          </AppText>
        </Animated.View>
      </When>
    </TouchableOpacity>
  );
};

export default TabButton;

const makeStyles = width =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      height: 45,
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 12,
      zIndex: 1,
      width,
    },
  });
