import {View, StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';
import {When} from 'react-if';

import {AppTheme} from 'Assets';

const AppLoader = ({isLoading}: {isLoading?: boolean}) => {
  return (
    <When condition={isLoading}>
      <View style={styles.container}>
        <View style={styles.content}>
          <ActivityIndicator size={30} color={AppTheme.colors.placeholder} />
        </View>
      </View>
    </When>
  );
};

export default AppLoader;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppTheme.colors.backdrop,
    height: '100%',
    width: '100%',
    zIndex: 1,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60,
    borderRadius: 8,
    backgroundColor: AppTheme.colors.grey,
  },
});
