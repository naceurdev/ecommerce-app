import React from 'react';
import { Formik } from 'formik';
import SignInForm from './SignInForm';

const initialValue = {
  email: '',
  password: '',
};

const SignUp = () => (
  <Formik
    initialValues={initialValue}
    onSubmit={(values) => {
      console.log('--values--', values);
    }}
    render={(props) => <SignInForm {...props} />}
  />
);

export default SignUp;
