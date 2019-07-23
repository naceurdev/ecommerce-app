import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  border-radius: 15px;
  padding: 5px 10px;
  color: #2b3e50; 
  outline: none;
  ${({ left }) => left && 'float: left;'};
  ${({ right }) => right && 'float: right;'};
`;


const Button = (props) => {
  const {
    style,
    className,
    label,
    onClick,
    type,
  } = props;
  return (
    <ButtonStyle
      type={type || 'button'}
      style={style}
      className={className}
      onClick={onClick}
      {...props}
    >
      {label}
    </ButtonStyle>
  );
};

Button.propTypes = {
  style: PropTypes.array,
  className: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  left: PropTypes.bool,
};

export default Button;
