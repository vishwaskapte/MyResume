import React from 'react';
import PropTypes from 'prop-types';

export default function WorkExperienceComponent({ name, from, to, responsibility, highlights, tech }) {
  return (
    <div className="experience-item">
      <h3 className="experience-name">{name}</h3>
      <div className="experience-period">
        <i className="fa fa-calendar" aria-hidden="true"></i>
        <span>{from}</span>
        <span className="experience-tag">{to}</span>
      </div>
      <p className="experience-description">{responsibility}</p>
      {Array.isArray(highlights) && highlights.length ? (
        <ul className="modern-list">
          {highlights.map((h, idx) => (
            <li key={idx}>{h}</li>
          ))}
        </ul>
      ) : null}
      {Array.isArray(tech) && tech.length ? (
        <div className="tag-row" aria-label="Tech stack">
          {tech.map((t, idx) => (
            <span className="tag" key={idx}>{t}</span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

WorkExperienceComponent.propTypes = {
  name: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  responsibility: PropTypes.string.isRequired,
  highlights: PropTypes.arrayOf(PropTypes.string),
  tech: PropTypes.arrayOf(PropTypes.string)
};
