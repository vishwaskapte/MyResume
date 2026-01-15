// Import Area
import React from 'react';
import PropTypes from 'prop-types';
import EducationComponent from "./EducationComponent";
import WorkExperienceComponent from "./WorkExperienceComponent";

// Function Definition
function RightComponent({ summary, projects, workExperience, education }) {
  return (
    <div className="main-content">
      {Array.isArray(summary) && summary.length ? (
        <div className="content-card">
          <h2 className="content-title">
            <i className="fa fa-user" aria-hidden="true"></i>
            Summary
          </h2>
          <ul className="modern-list">
            {summary.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="content-card">
        <h2 className="content-title">
          <i className="fa fa-suitcase" aria-hidden="true"></i>
          Work Experience
        </h2>
        {workExperience.map((work, index) => (
          <WorkExperienceComponent
            key={index}
            name={work.name}
            from={work.from}
            to={work.to}
            responsibility={work.responsibility}
            highlights={work.highlights}
            tech={work.tech}
          />
        ))}
      </div>

      {Array.isArray(projects) && projects.length ? (
        <div className="content-card">
          <h2 className="content-title">
            <i className="fa fa-code" aria-hidden="true"></i>
            Projects
          </h2>
          <div className="projects-grid">
            {projects.map((p, idx) => (
              <div className="project-card" key={idx}>
                <div className="project-header">
                  <h3 className="project-name">{p.name}</h3>
                  <div className="project-links">
                    {p.links?.live ? (
                      <a className="project-link" href={p.links.live} target="_blank" rel="noopener noreferrer">
                        Live
                      </a>
                    ) : null}
                    {p.links?.code ? (
                      <a className="project-link" href={p.links.code} target="_blank" rel="noopener noreferrer">
                        Code
                      </a>
                    ) : null}
                  </div>
                </div>
                {p.description ? <p className="project-description">{p.description}</p> : null}
                {Array.isArray(p.highlights) && p.highlights.length ? (
                  <ul className="modern-list">
                    {p.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                ) : null}
                {Array.isArray(p.tech) && p.tech.length ? (
                  <div className="tag-row" aria-label="Project tech stack">
                    {p.tech.map((t, i) => (
                      <span className="tag" key={i}>{t}</span>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <div className="content-card">
        <h2 className="content-title">
          <i className="fa fa-certificate" aria-hidden="true"></i>
          Education
        </h2>
        {education.map((edu, index) => (
          <EducationComponent
            key={index}
            college={edu.college}
            degree={edu.degree}
            from={edu.from}
            to={edu.to}
          />
        ))}
      </div>
    </div>
  );
}

// PropTypes
RightComponent.propTypes = {
  summary: PropTypes.arrayOf(PropTypes.string),
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      links: PropTypes.shape({
        live: PropTypes.string,
        code: PropTypes.string
      }),
      description: PropTypes.string,
      highlights: PropTypes.arrayOf(PropTypes.string),
      tech: PropTypes.arrayOf(PropTypes.string)
    })
  ),
  workExperience: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      from: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
      responsibility: PropTypes.string.isRequired,
      highlights: PropTypes.arrayOf(PropTypes.string),
      tech: PropTypes.arrayOf(PropTypes.string)
    })
  ).isRequired,
  education: PropTypes.arrayOf(
    PropTypes.shape({
      college: PropTypes.string.isRequired,
      degree: PropTypes.string.isRequired,
      from: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired
    })
  ).isRequired
};

// Export Area
export default RightComponent;
