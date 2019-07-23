import React from 'react';
import PropTypes from 'prop-types';
import SignUpFormStyle from './SignUpFormStyle';
import { Input, Button } from '../../commun';

const SignUpForm = ({
  errors,
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  touched,
}) => (
  <SignUpFormStyle onSubmit={handleSubmit}>
    <h1 className="form--title">SignUp Form</h1>
    <Input
      type="text"
      name="firstName"
      label="First Name"
      value={values.firstName}
      onChange={handleChange}
      onBlur={handleBlur}
      error={errors.firstName && touched.firstName}
      errorMessage={errors.firstName}
    />

    <Input
      type="text"
      name="lastName"
      label="Last Name"
      value={values.lastName}
      onChange={handleChange}
      onBlur={handleBlur}
      error={errors.lastName && touched.lastName}
      errorMessage={errors.lastName}
    />

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

    <Input
      type="password"
      name="confPassword"
      label="Confirm Password"
      value={values.confPassword}
      onChange={handleChange}
      onBlur={handleBlur}
      error={errors.confPassword && touched.confPassword}
      errorMessage={errors.confPassword}
    />
    <Button right type="submit" label="Sign Up" />
  </SignUpFormStyle>
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
