import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import SignUpForm from './SignUpForm';
import { signUp } from '../../actions/userActions';

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

const SignUp = ({ createUser }) => (
  <Formik
    initialValues={initialValue}
    validationSchema={schemaValidation}
    onSubmit={(values) => { createUser(values); }}
    render={(props) => <SignUpForm {...props} />}
  />
);
const mapDispatchToProps = (dispatch) => ({
  createUser: (values) => dispatch(signUp(values)),
});
export default connect(null, mapDispatchToProps)(SignUp);
