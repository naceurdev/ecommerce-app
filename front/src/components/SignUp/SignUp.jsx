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
  firstName: Yup.string().required('required'),
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
