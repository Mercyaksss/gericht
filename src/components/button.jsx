import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './button.scss';

function Button({ text }) {
  return (
    <button>{text}</button>
  );
}

Button.propTypes = { // Add prop type validation
  text: PropTypes.string.isRequired,
};

export default Button;
