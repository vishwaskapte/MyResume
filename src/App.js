// Import Area
import './App.css';
import LeftComponent from './Components/LeftComponent';
import RightComponent from './Components/RightComponent';
import FooterComponent from './Components/FooterComponent';
import { resumeData } from './data/resumeData';

// Function Definition Area
function App() {
  return (
    <div className="App">
      <div className="resume-shell">
        <div className="resume-shell-inner">
          <header className="resume-header">
            <div className="resume-header-main">
              <h1>{resumeData.personalInfo.name}</h1>
              {resumeData.personalInfo.headline ? (
                <p className="resume-headline">{resumeData.personalInfo.headline}</p>
              ) : null}

              {Array.isArray(resumeData.topSkills) && resumeData.topSkills.length ? (
                <div className="resume-tags" aria-label="Top skills">
                  {resumeData.topSkills.map((skill, idx) => (
                    <span className="resume-tag" key={idx}>
                      {skill}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>

            {resumeData.personalInfo.links ? (
              <div className="resume-links" aria-label="Profile links">
                {resumeData.personalInfo.links.portfolio ? (
                  <a
                    className="resume-link"
                    href={resumeData.personalInfo.links.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Portfolio
                  </a>
                ) : null}
                {resumeData.personalInfo.links.github ? (
                  <a
                    className="resume-link"
                    href={resumeData.personalInfo.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                ) : null}
                {resumeData.personalInfo.links.linkedin ? (
                  <a
                    className="resume-link"
                    href={resumeData.personalInfo.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                ) : null}
              </div>
            ) : null}
          </header>

          <div className="resume-container">
            <LeftComponent
              personalInfo={resumeData.personalInfo}
              skills={resumeData.skills}
              languages={resumeData.languages}
              strengths={resumeData.strengths}
            />
            <RightComponent
              workExperience={resumeData.workExperience}
              education={resumeData.education}
              summary={resumeData.summary}
              projects={resumeData.projects}
            />
          </div>

          <FooterComponent socialMedia={resumeData.socialMedia} />
        </div>
      </div>
    </div>
  );
}

// Export Area
export default App;
