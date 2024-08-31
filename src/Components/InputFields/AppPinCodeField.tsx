import {View, StyleSheet} from 'react-native';
import React from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';

import {AppTheme} from 'Assets';
import ErrorText from 'Components/Commons/ErrorText';

interface IAppOTPInputField {
  code: string;
  onCodeEntered: (code: string) => void;
  onCodeFilled?: (code: string) => void;
  error?: string;
  pinCount?: number;
}

const AppPinCodeField = (props: IAppOTPInputField) => {
  const {code, pinCount = 6, onCodeEntered, error, onCodeFilled} = props;

  return (
    <View>
      <OTPInputView
        autoFocusOnLoad={false}
        code={code}
        pinCount={pinCount}
        keyboardType="number-pad"
        style={styles.otpInputView}
        codeInputFieldStyle={styles.otpNumberBox}
        codeInputHighlightStyle={styles.otpHightLightNumberBox}
        onCodeChanged={onCodeEntered}
        onCodeFilled={onCodeFilled}
        placeholderCharacter="*"
        placeholderTextColor={AppTheme.colors.placeholder}
      />
      <ErrorText>{error}</ErrorText>
    </View>
  );
};

export default AppPinCodeField;

const styles = StyleSheet.create({
  otpInputView: {
    height: 50,
  },
  otpNumberBox: {
    fontSize: 14,
    fontWeight: '600',
    color: AppTheme.colors.text,
    borderRadius: 4,
    borderWidth: 0.2,
    borderColor: AppTheme.colors.text,
    backgroundColor: AppTheme.colors.white,
  },
  otpHightLightNumberBox: {
    borderWidth: 1,
  },
});
