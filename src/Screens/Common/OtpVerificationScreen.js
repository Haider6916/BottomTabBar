import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, useForm} from 'react-hook-form';
import {pathOr} from 'ramda';

import {AppButton, AppHeader, AppPinCodeField, AppText, BackButton, ScreenWrapper, Spacer} from 'Components';
import {otpCodeSchema} from 'Schemas';
import {NavigationService} from 'Services';
import {SCREENS} from 'utils';
import {AppTheme} from 'Assets';

const OtpVerificationScreen = ({route}) => {
  const phoneNumber = pathOr('', ['params', 'phoneNumber'], route);
  const {t} = useTranslation();

  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm({defaultValues: {code: ''}, resolver: yupResolver(otpCodeSchema), mode: 'onChange'});

  const onSubmit = () => {
    NavigationService.navigate(SCREENS.SIGNUP_SCREEN, {phoneNumber});
  };
  return (
    <ScreenWrapper backgroundColor={AppTheme.colors.primary} barColor={AppTheme.colors.primary}>
      <AppHeader backgroundColor={AppTheme.colors.primary} leftAccessory={<BackButton />} />
      <View style={styles.container}>
        <AppText size={27} kind="Medium">
          {t('otpVerificaiton')}
        </AppText>

        <Spacer top={12} bottom={30}>
          <AppText size={14}> {t('enterOTP')}</AppText>
        </Spacer>
        <Controller name="code" control={control} render={({field: {value, onChange}}) => <AppPinCodeField code={value} onCodeEntered={onChange} />} />

        <Spacer top={20} />
        <AppButton title={t('verify')} onPress={handleSubmit(onSubmit)} disabled={!isValid} />
      </View>
    </ScreenWrapper>
  );
};

export default OtpVerificationScreen;

const styles = StyleSheet.create({
  container: {flex: 0.85, justifyContent: 'center', paddingHorizontal: 45},
});
