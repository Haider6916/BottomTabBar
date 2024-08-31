import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {FormProvider, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {AppButton, AppHeader, AppInputFormField, AppText, ScreenWrapper, Spacer} from 'Components';
import {PhoneIcon} from 'Icons';
import {PHONE_NUMBER_MASK} from 'Masks';
import {NavigationService} from 'Services';
import {SCREENS} from 'utils';
import {phoneNumberSchema} from 'Schemas';
import {AppTheme} from 'Assets';

const LoginScreen = () => {
  const {t} = useTranslation();

  const methods = useForm({defaultValues: {phoneNumber: ''}, resolver: yupResolver(phoneNumberSchema), mode: 'all'});

  const onSubmit = data => {
    NavigationService.navigate(SCREENS.OTP_VERIFICATION_SCREEN, {phoneNumber: data.phoneNumber});
  };

  return (
    <FormProvider {...methods}>
      <ScreenWrapper backgroundColor={AppTheme.colors.primary} barColor={AppTheme.colors.primary}>
        <AppHeader backgroundColor={AppTheme.colors.primary} />

        <View style={styles.container}>
          <AppText size={27} kind="Medium">
            {t('getStarted')}
          </AppText>

          <Spacer top={12} bottom={30}>
            <AppText size={14}> {t('enterPhoneNumber')}</AppText>
          </Spacer>
          <AppInputFormField name="phoneNumber" leftAccessory={<PhoneIcon size={15} />} placeholder={t('phoneNumber')} mask={PHONE_NUMBER_MASK} keyboardType="number-pad" />

          <Spacer top={20} />
          <AppButton title={t('login')} onPress={methods.handleSubmit(onSubmit)} disabled={!methods.formState.isValid} />
        </View>
      </ScreenWrapper>
    </FormProvider>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {flex: 0.85, justifyContent: 'center', paddingHorizontal: 45},
});
