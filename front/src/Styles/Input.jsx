import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputStyle = styled.div`
  margin: 10px 5px;
  display: flex;
  align-items: flex-start;
  label {
    width: 150px;
    margin-top: 10px;
  }
 span{
   display: block;
 }
  input {
    width: 250px;
    border: 1px solid ${({ error }) => error ? 'red' : 'gray'} ;
    border-radius: 15px;
    padding: 5px 10px;
    outline: none;
  }
  p{
    color: red;
  }
`;


const Input = ({
  name,
  value,
  onChange,
  onBlur,
  label,
  type,
  id,
  className,
  error,
  errorMessage,
}) => (
  <InputStyle error={error}>
    {label && (
      <label htmlFor={id}>
        {label}
      </label>
    )}
    <span>
      <input
        className={className}
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p>{errorMessage}</p>}
    </span>
  </InputStyle>
);

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string || PropTypes.number,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  label: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.any,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
};

export default Input;
