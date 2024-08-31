import {I18nManager, StyleSheet, View} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import RNRestart from 'react-native-restart';

import {AppButton, AppText, ScreenWrapper, Spacer} from 'Components';
import {updateLanguage} from 'locales';
import {AppTheme} from 'Assets';
import {AsyncStorageService} from 'Services';
import {APP_LANGUAGES, APP_LANGUAGE_KEY} from 'utils';

const SelectLanguageScreen = () => {
  const {t} = useTranslation();

  const onEnglishButtonPress = async () => {
    updateLanguage(APP_LANGUAGES.ENGLISH);
    await AsyncStorageService.setData(APP_LANGUAGES.ENGLISH, APP_LANGUAGE_KEY);
    I18nManager.forceRTL(false);
    RNRestart.Restart();
  };
  const onUrduButtonPress = async () => {
    updateLanguage(APP_LANGUAGES.URDU);
    I18nManager.forceRTL(true);
    await AsyncStorageService.setData(APP_LANGUAGES.URDU, APP_LANGUAGE_KEY);
    RNRestart.Restart();
  };

  return (
    <ScreenWrapper backgroundColor={AppTheme.colors.primary} barColor={AppTheme.colors.primary}>
      <View style={styles.container}>
        <AppText kind="Medium" size={60}>
          {t('appName')}
        </AppText>

        <Spacer top={60} bottom={27}>
          <AppText kind="Medium">{t('selectLanguage')}</AppText>
        </Spacer>

        <AppButton title={t('english')} color={AppTheme.colors.white} titleProps={{color: AppTheme.colors.black}} onPress={onEnglishButtonPress} />
        <Spacer top={15} />
        <AppButton title={t('urdu')} onPress={onUrduButtonPress} />
      </View>
    </ScreenWrapper>
  );
};

export default SelectLanguageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
});
