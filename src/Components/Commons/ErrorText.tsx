import React, {PropsWithChildren} from 'react';
import {When} from 'react-if';

import AppText, {IAppTextProps} from './AppText';
import {AppTheme} from 'Assets';
import Spacer from './Spacer';

interface IErrorTextProps extends IAppTextProps {
  topSpace?: number;
  bottomSpace?: number;
}

const ErrorText = (props: PropsWithChildren<IErrorTextProps>) => {
  const {children, topSpace = 5, bottomSpace, ...rest} = props;
  return (
    <When condition={children !== null}>
      <Spacer top={topSpace} bottom={bottomSpace}>
        <AppText size={12} color={AppTheme.colors.error} {...rest}>
          {children}
        </AppText>
      </Spacer>
    </When>
  );
};

export default ErrorText;
