import React from 'react';
import PropTypes from 'prop-types';

export default function LanguagesComponent({ name, proficiency }) {
  return (
    <div className="language-item">
      <div className="language-name">{name}</div>
      <div className="language-bar-container">
        <div 
          className="language-bar" 
          style={{ width: proficiency }}
          role="progressbar"
          aria-valuenow={parseInt(proficiency)}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label={`${name} language proficiency: ${proficiency}`}
        ></div>
      </div>
      <div className="language-percent">{proficiency}</div>
    </div>
  );
}

LanguagesComponent.propTypes = {
  name: PropTypes.string.isRequired,
  proficiency: PropTypes.string.isRequired
};
