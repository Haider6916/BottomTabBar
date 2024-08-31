import {View, StyleSheet, NativeSyntheticEvent, TextInputFocusEventData, StyleProp, ViewStyle} from 'react-native';
import React, {useState} from 'react';
import TextMaskInput, {MaskInputProps} from 'react-native-mask-input';
import {Else, If, Then, When} from 'react-if';

import {AppText, Spacer, ErrorText} from 'Components';
import {AppTheme} from 'Assets';
import {IAppTextProps} from '../Commons/AppText';
import {isEmptyOrNill, isRTL} from 'utils';

export interface IAppInputFieldProps extends MaskInputProps {
  label?: string;
  labelProps?: IAppTextProps;
  hint?: string;
  affix?: string;
  leftAccessory?: React.ReactElement;
  rightAccessory?: React.ReactElement;
  contentStyle?: StyleProp<ViewStyle>;
  height?: number | string;
  width?: number | string;
  error?: string;
}

const AppInputField = (props: IAppInputFieldProps) => {
  const {label, hint, labelProps, height = 50, width = 'auto', onFocus, onBlur, affix, leftAccessory, rightAccessory, contentStyle, error, ...rest} = props;
  const borderColorName = !isEmptyOrNill(error) ? AppTheme.colors.error : AppTheme.colors.grey;

  const [borderColor, setBorderColor] = useState(borderColorName);
  const styles = makeStyles(borderColor);

  const handleOnFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setBorderColor(AppTheme.colors.secondaryText);
    if (onFocus) onFocus(e);
  };

  const handleOnBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setBorderColor(AppTheme.colors.grey);
    if (onBlur) onBlur(e);
  };

  return (
    <View style={{width}}>
      <When condition={label}>
        <View style={styles.content}>
          <AppText kind="Medium" size={14} textTransform="uppercase" color={AppTheme.colors.text} {...labelProps}>
            {label}
          </AppText>

          <Spacer left={8}>
            <AppText kind="italic" size={12} color={AppTheme.colors.placeholder}>
              {hint}
            </AppText>
          </Spacer>
        </View>
        <Spacer bottom={8} />
      </When>

      {/* Input Field */}
      <View style={[styles.inputContainer, {height, width}, contentStyle]}>
        <When condition={leftAccessory !== null}>{leftAccessory}</When>
        <TextMaskInput style={[styles.inputStyle]} placeholderTextColor={AppTheme.colors.placeholder} onFocus={handleOnFocus} onBlur={handleOnBlur} {...rest} />

        {/* Right Accessory or affix */}
        <Spacer right={10}>
          <If condition={affix}>
            <Then>
              <AppText size={14} color={AppTheme.colors.placeholder}>
                {affix}
              </AppText>
            </Then>
            <Else>
              <When condition={rightAccessory !== null}>{rightAccessory}</When>
            </Else>
          </If>
        </Spacer>
      </View>

      <ErrorText>{error}</ErrorText>
    </View>
  );
};

export default AppInputField;

const makeStyles = (borderColor: string) =>
  StyleSheet.create({
    content: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: AppTheme.colors.white,
      paddingHorizontal: 16,
      borderRadius: 8,
      borderWidth: 1,
      borderColor,
      width: '100%',
    },
    inputStyle: {
      flex: 1,
      paddingVertical: 13,
      paddingHorizontal: 16,
      fontSize: 14,
      fontFamily: AppTheme.fonts.Regular,
      textAlign: isRTL ? 'right' : 'left',
    },
  });
