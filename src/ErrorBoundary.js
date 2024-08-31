import React, {Component} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import RNRestart from 'react-native-restart';

import {AppText, ScreenWrapper, Spacer} from 'Components';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return {hasError: true};
  }

  handleAppCrash = () => {
    RNRestart.Restart();
  };

  render() {
    if (this.state.hasError) {
      return (
        <ScreenWrapper>
          <View style={styles.content}>
            <AppText size={20}>Oops, Something Went Wrong</AppText>

            <Spacer vertical={20}>
              <AppText kind="Medium" textAlign="center">
                The app ran into a problem and could not continue. We apologise for any inconvenience this has caused! Press the button below to restart the app. Please contact us if this issue
                persists.
              </AppText>
            </Spacer>

            <Button title="Restart the application" onPress={() => this.handleAppCrash()} />
          </View>
        </ScreenWrapper>
      );
    }
    return this.props.children;
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});
