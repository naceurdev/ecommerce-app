import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import SignUpForm from './SignUpForm';

const initialValue = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confPassword: '',
};

const schemaValidation = Yup.object().shape({
  firstName: Yup.string().required('FirstName is required'),
  lastName: Yup.string().required('LastName is required'),
  email: Yup.string().email().required('Email is required'),
  password: Yup.string().required('Password is required'),
  confPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match'),
});

const SignUp = () => (
  <Formik
    initialValues={initialValue}
    validationSchema={schemaValidation}
    onSubmit={(values) => {
      console.log('--values--', values);
    }}
    render={(props) => <SignUpForm {...props} />}
  />
);

export default SignUp;
