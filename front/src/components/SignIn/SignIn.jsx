import React from 'react';
import { Formik } from 'formik';
import SignInForm from './SignInForm';
import { signIn } from '../../actions/userActions';

const initialValue = {
  email: '',
  password: '',
};

const SignUp = () => (
  <Formik
    initialValues={initialValue}
    onSubmit={(values) => {
      signIn(values);
    }}
    render={(props) => <SignInForm {...props} />}
  />
);

export default SignUp;
