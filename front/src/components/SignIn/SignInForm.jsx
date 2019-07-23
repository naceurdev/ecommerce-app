import React from 'react';
import PropTypes from 'prop-types';
import SignInFormStyle from './SignInFormStyle';
import { Input, Button } from '../../commun';

const SignUpForm = ({
  errors,
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  touched,
}) => (
  <SignInFormStyle onSubmit={handleSubmit}>
    <h1 className="form--title">Sign In Form</h1>
    <Input
      type="text"
      name="email"
      label="Email"
      value={values.email}
      onChange={handleChange}
      onBlur={handleBlur}
      error={errors.email && touched.email}
      errorMessage={errors.email}
    />

    <Input
      type="password"
      name="password"
      label="Password"
      value={values.password}
      onChange={handleChange}
      onBlur={handleBlur}
      error={errors.password && touched.password}
      errorMessage={errors.password}
    />
    <Button right type="submit" label="Sign In" />
  </SignInFormStyle>
);


SignUpForm.propTypes = {
  errors: PropTypes.object,
  values: PropTypes.object,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func,
  touched: PropTypes.object,
};

export default SignUpForm;
