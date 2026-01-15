import React from 'react';
import PropTypes from 'prop-types';

export default function EducationComponent({ college, degree, from, to }) {
  return (
    <div className="education-item">
      <h3 className="education-college">{college}</h3>
      <p className="education-degree">{degree}</p>
      <div className="education-period">
        <i className="fa fa-calendar" aria-hidden="true"></i>
        <span>{from} {to}</span>
      </div>
    </div>
  );
}

EducationComponent.propTypes = {
  college: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};
