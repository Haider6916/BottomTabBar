import React, {useMemo, useState} from 'react';
import {View, StyleSheet, StyleProp, TextStyle, ViewStyle} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {When} from 'react-if';
import {useTranslation} from 'react-i18next';

import {AppTheme} from 'Assets';
import AppText, {IAppTextProps} from '../Commons/AppText';
import {isEmptyOrNill, isRTL} from 'utils';
import Spacer from 'Components/Commons/Spacer';
import {AngleDownIcon, AngleUpIcon} from 'Icons';
import ErrorText from 'Components/Commons/ErrorText';

const Icon = ({iconName}) => {
  switch (iconName) {
    case 'Down':
      return <AngleDownIcon size={18} color={AppTheme.colors.placeholder} />;
    case 'Up':
      return <AngleUpIcon size={18} color={AppTheme.colors.placeholder} />;
    default:
      return <></>;
  }
};

interface IAppPickerProps {
  label?: string;
  labelProps?: IAppTextProps;
  placeholder?: string;
  placeholderStyle?: StyleProp<TextStyle>;
  pickerStyle?: StyleProp<ViewStyle>;
  pickerInputStyle?: StyleProp<ViewStyle>;
  items: {label: string; value: string}[];
  onValueChange: () => void;
  height?: string | number;
  width?: string | number;
  value?: string;
  error?: string;
  color?: string;
}

const AppPicker = (props: IAppPickerProps) => {
  const {items, onValueChange, color = AppTheme.colors.white, error, height = 50, label, labelProps, pickerInputStyle, pickerStyle, placeholder, placeholderStyle, value, width = 'auto'} = props;
  const borderColorName = !isEmptyOrNill(error) ? AppTheme.colors.error : AppTheme.colors.grey;

  const [icon, setIcon] = useState('Down');
  const [borderColor, setBorderColor] = useState(borderColorName);
  const {t} = useTranslation();

  const pickerPlaceHolder = placeholder
    ? {
        label: placeholder,
        value: null,
      }
    : {
        label: t('select'),
        value: null,
      };

  const pickerStyleObject = useMemo(
    () => ({
      inputAndroid: StyleSheet.flatten([styles.pickerInputStyle, pickerInputStyle]),
      inputIOS: StyleSheet.flatten([styles.pickerInputStyle, pickerInputStyle]),
      placeholder: StyleSheet.flatten([styles.placeholderStyle, placeholderStyle]),
      inputIOSContainer: StyleSheet.flatten([styles.pickerStyle, {height, borderColor, backgroundColor: color}, pickerStyle]),
      inputAndroidContainer: StyleSheet.flatten([styles.pickerStyle, {height, borderColor, backgroundColor: color}, pickerStyle]),
      iconContainer: StyleSheet.flatten([{paddingRight: 10}]),
    }),
    [pickerInputStyle, placeholderStyle, pickerStyle, height, borderColor, color],
  );

  const updateIcon = (iconName: string) => setIcon(iconName);
  const showIcon = () => <Icon iconName={icon} />;
  const onOpen = () => {
    setBorderColor(AppTheme.colors.secondaryText);
    updateIcon('Up');
  };

  const onClose = () => {
    setBorderColor(AppTheme.colors.grey);
    updateIcon('Down');
  };

  return (
    <View style={{width}}>
      <When condition={label}>
        <>
          <AppText kind="Medium" size={14} textTransform="uppercase" color={AppTheme.colors.text} {...labelProps}>
            {label}
          </AppText>
          <Spacer bottom={10} />
        </>
      </When>

      <RNPickerSelect
        useNativeAndroidPickerStyle={false}
        fixAndroidTouchableBug
        onDonePress={onClose}
        items={items}
        placeholder={pickerPlaceHolder}
        style={pickerStyleObject}
        onOpen={onOpen}
        onClose={onClose}
        value={value}
        onValueChange={onValueChange}
        Icon={showIcon} // leave it as it is
      />
      <ErrorText>{error}</ErrorText>
    </View>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  pickerInputStyle: {
    textTransform: 'capitalize',
    color: AppTheme.colors.text,
    paddingRight: 10,
    textAlign: isRTL ? 'right' : 'left',
  },

  pickerStyle: {
    justifyContent: 'center',
    paddingHorizontal: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: AppTheme.colors.grey,
  },
  placeholderStyle: {
    fontSize: 16,
    fontFamily: AppTheme.fonts.Regular,
    color: AppTheme.colors.placeholder,
    textAlign: isRTL ? 'right' : 'left',
  },
});
