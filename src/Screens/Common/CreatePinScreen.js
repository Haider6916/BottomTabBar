import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useTranslation} from 'react-i18next';

import {AppButton, AppHeader, AppPinCodeField, AppText, BackButton, ScreenWrapper, Spacer} from 'Components';
import {pinCodeSchema} from 'Schemas';
import {AppTheme} from 'Assets';
import useAppContext from 'Context';

const CreatePinScreen = () => {
  const {t} = useTranslation();
  const {storeUser} = useAppContext();
  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm({defaultValues: {pin: ''}, resolver: yupResolver(pinCodeSchema), mode: 'onChange'});

  const onSubmit = () => {
    storeUser({user: 'appuser'});
  };

  return (
    <ScreenWrapper backgroundColor={AppTheme.colors.primary} barColor={AppTheme.colors.primary}>
      <AppHeader backgroundColor={AppTheme.colors.primary} leftAccessory={<BackButton />} />

      <View style={styles.container}>
        <AppText size={27} kind="Medium">
          {t('createPin')}
        </AppText>

        <Spacer top={12} bottom={30}>
          <AppText size={14}> {t('createSixDigitPin')}</AppText>
        </Spacer>
        <Controller name="pin" control={control} render={({field: {value, onChange}}) => <AppPinCodeField code={value} onCodeEntered={onChange} />} />

        <Spacer top={20} />
        <AppButton title={t('confirm')} onPress={handleSubmit(onSubmit)} disabled={!isValid} />
      </View>
    </ScreenWrapper>
  );
};

export default CreatePinScreen;

const styles = StyleSheet.create({
  container: {flex: 0.85, justifyContent: 'center', paddingHorizontal: 45},
});
