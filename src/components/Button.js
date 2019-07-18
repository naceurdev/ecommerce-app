import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  style, className, label, onClick,
}) => (
  <button type="button" style={style} className={className} onClick={onClick}>
    {label}
  </button>
);

Button.propTypes = {
  style: PropTypes.array,
  className: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
