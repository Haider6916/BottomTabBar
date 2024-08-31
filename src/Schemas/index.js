import i18next from 'i18next';
import * as yup from 'yup';

export const otpCodeSchema = yup.object().shape({
  code: yup.string().required('OTP Code is Required').min(6),
});

export const pinCodeSchema = yup.object().shape({
  pin: yup.string().required('Pin Code is Required').min(6),
});

export const phoneNumberSchema = yup.object().shape({
  phoneNumber: yup
    .string()
    .required('Phone number is Required')
    .max(10, i18next.t('phoneNumberValidation'))
    .min(10, i18next.t('phoneNumberValidation'))
    .matches(/^\d+$/, 'The field should have digits only'),
});

export const signupSchema = yup.object().shape(
  {
    phoneNumber: yup.string().required('Phone number is Required').max(10).min(10).matches(/^\d+$/, 'The field should have digits only'),
    fullName: yup.string().required('Full Name is Required'),
    cnic: yup
      .string()
      .required()
      .when('cnic', {is: value => value?.length, then: rule => rule.min(13).max(13)}),
    accountType: yup.string().required('Account Type is Required'),
  },
  [['cnic', 'cnic']],
);
