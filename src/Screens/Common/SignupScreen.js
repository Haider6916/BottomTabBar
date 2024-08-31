import React from 'react';
import {pathOr} from 'ramda';
import {StyleSheet, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, FormProvider, useForm} from 'react-hook-form';

import {AppButton, AppHeader, AppInputFormField, AppPicker, AppText, BackButton, ScreenWrapper, Spacer} from 'Components';

import {IDCardIcon, PhoneIcon, UserIcon} from 'Icons';
import {CNIC_MASK, PHONE_NUMBER_MASK} from 'Masks';
import {ACCOUNT_TYPES, SCREENS} from 'utils';
import {signupSchema} from 'Schemas';
import {NavigationService} from 'Services';
import {AppTheme} from 'Assets';

const SignupScreen = ({route}) => {
  const phoneNumber = pathOr('', ['params', 'phoneNumber'], route);
  const {t} = useTranslation();
  const methods = useForm({defaultValues: {phoneNumber, fullName: '', accountType: '', cnic: ''}, mode: 'onChange', resolver: yupResolver(signupSchema)});

  const onSubmit = () => {
    NavigationService.navigate(SCREENS.CREATE_PIN_SCREEN);
  };

  return (
    <FormProvider {...methods}>
      <ScreenWrapper backgroundColor={AppTheme.colors.primary} barColor={AppTheme.colors.primary}>
        <AppHeader backgroundColor={AppTheme.colors.primary} leftAccessory={<BackButton />} />
        <View style={styles.container}>
          <AppText size={27} kind="Medium">
            {t('signupNow')}
          </AppText>

          <Spacer top={12} bottom={30}>
            <AppText size={14}> {t('registerNewAccount')}</AppText>
          </Spacer>

          <AppInputFormField
            name="phoneNumber"
            label={t('phoneNumber')}
            leftAccessory={<PhoneIcon size={15} />}
            placeholder={t('enterPhoneNumber')}
            mask={PHONE_NUMBER_MASK}
            keyboardType="number-pad"
          />

          <AppInputFormField name="fullName" label={t('fullName')} placeholder={t('enterFullName')} keyboardType="twitter" leftAccessory={<UserIcon size={15} />} />

          <AppInputFormField name="cnic" label={t('cnicNumber')} placeholder={t('enterCnic')} keyboardType="number-pad" mask={CNIC_MASK} leftAccessory={<IDCardIcon size={15} />} />

          <Controller
            name="accountType"
            control={methods.control}
            render={({field: {value, onChange}, fieldState: {error}}) => (
              <AppPicker value={value} label={t('accountType')} items={ACCOUNT_TYPES} onValueChange={onChange} placeholder={t('selectAccountType')} error={error?.message} />
            )}
          />

          <Spacer top={60} />
          <AppButton title={t('signupNow')} onPress={methods.handleSubmit(onSubmit)} disabled={!methods.formState.isValid} />
        </View>
      </ScreenWrapper>
    </FormProvider>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {flex: 0.9, justifyContent: 'center', paddingHorizontal: 45},
});
