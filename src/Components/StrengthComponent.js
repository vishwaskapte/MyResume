import React from 'react';
import PropTypes from 'prop-types';

export default function StrengthComponent({ name, description }) {
  return (
    <div className="strength-item">
      <div className="strength-name">{name}</div>
      <div className="strength-description">{description}</div> 
    </div> 
  );
}

StrengthComponent.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
