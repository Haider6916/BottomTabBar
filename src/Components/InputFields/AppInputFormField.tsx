import React from 'react';
import {pathOr} from 'ramda';
import {Controller, useFormContext} from 'react-hook-form';

import AppInputField, {IAppInputFieldProps} from './AppInputField';

interface IAppInputFormField extends Omit<IAppInputFieldProps, 'error' | 'value' | 'onChangeText'> {
  name: string;
}

const AppInputFormField = (props: IAppInputFormField) => {
  const {name, ...rest} = props;

  const {
    control,
    formState: {errors},
  } = useFormContext();

  const message = pathOr('', [name, 'message'], errors);

  return <Controller name={name} control={control} render={({field: {value, onChange}}) => <AppInputField value={value} onChangeText={(_, text) => onChange(text)} error={message} {...rest} />} />;
};

export default AppInputFormField;
