import React from 'react';
import PropTypes from 'prop-types';

export default function SkillsComponent({ skill, percent }) {
  return (
    <div className="skill-item">
      <div className="skill-name">{skill}</div>
      <div className="skill-bar-container">
        <div 
          className="skill-bar" 
          style={{ width: percent }}
          role="progressbar"
          aria-valuenow={parseInt(percent)}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label={`${skill} skill level: ${percent}`}
        ></div>
      </div>
      <div className="skill-percent">{percent}</div>
    </div>          
  );
}

SkillsComponent.propTypes = {
  skill: PropTypes.string.isRequired,
  percent: PropTypes.string.isRequired
};
