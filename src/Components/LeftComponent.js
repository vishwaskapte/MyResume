// Import Area
import React from 'react';
import PropTypes from 'prop-types';
import LanguagesComponent from './LanguagesComponent';
import SkillsComponent from './SkillsComponent';
import StrengthComponent from './StrengthComponent';

// Function Definition Area
export default function LeftComponent({ personalInfo, skills, languages, strengths }) {
  return (
    <aside className="sidebar">
      <div className="profile-section">
        <h2 className="profile-title">{personalInfo.title}</h2>
        <div className="contact-info">
          <div className="contact-item">
            <i className="fa fa-briefcase" aria-hidden="true"></i>
            <span>{personalInfo.title}</span>
          </div>
          <div className="contact-item">
            <i className="fa fa-home" aria-hidden="true"></i>
            <span>{personalInfo.location}</span>
          </div>
          <div className="contact-item">
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          </div>
          <div className="contact-item">
            <i className="fa fa-phone" aria-hidden="true"></i>
            <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}>{personalInfo.phone}</a>
          </div>
        </div>
      </div>

      <div className="section">
        <h3 className="section-title">
          <i className="fa fa-asterisk" aria-hidden="true"></i>
          Skills
        </h3>
        {skills.map((skillItem, index) => (
          <SkillsComponent
            key={index}
            skill={skillItem.skill}
            percent={skillItem.percent}
          />
        ))}
      </div>

      <div className="section">
        <h3 className="section-title">
          <i className="fa fa-globe" aria-hidden="true"></i>
          Languages
        </h3>
        {languages.map((language, index) => (
          <LanguagesComponent
            key={index}
            name={language.name}
            proficiency={language.proficiency}
          />
        ))}
      </div>

      <div className="section">
        <h3 className="section-title">
          <i className="fa fa-star" aria-hidden="true"></i>
          Strengths
        </h3>
        {strengths.map((strength, index) => (
          <StrengthComponent
            key={index}
            name={strength.name}
            description={strength.description}
          />
        ))}
      </div>
    </aside>
  );
}

// PropTypes
LeftComponent.propTypes = {
  personalInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  }).isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      skill: PropTypes.string.isRequired,
      percent: PropTypes.string.isRequired
    })
  ).isRequired,
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      proficiency: PropTypes.string.isRequired
    })
  ).isRequired,
  strengths: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired
};
