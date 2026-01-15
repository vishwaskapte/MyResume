// Import Area
import React from 'react';
import PropTypes from 'prop-types';

// Function Definition Area
function FooterComponent({ socialMedia }) {
  return (
    <footer className="footer">
      <p>Find me on social media</p>
      <div className="social-links">
        <a href={socialMedia.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link">
          <i className="fa fa-facebook-official" aria-hidden="true"></i>
        </a>
        <a href={socialMedia.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a href={socialMedia.snapchat} target="_blank" rel="noopener noreferrer" aria-label="Snapchat" className="social-link">
          <i className="fa fa-snapchat" aria-hidden="true"></i>
        </a>
        <a href={socialMedia.pinterest} target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="social-link">
          <i className="fa fa-pinterest-p" aria-hidden="true"></i>
        </a>
        <a href={socialMedia.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-link">
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
      </div>
      <p className="footer-credit">
        Built with React & Modern CSS
      </p>
    </footer>
  );
}

// PropTypes
FooterComponent.propTypes = {
  socialMedia: PropTypes.shape({
    facebook: PropTypes.string.isRequired,
    instagram: PropTypes.string.isRequired,
    snapchat: PropTypes.string.isRequired,
    pinterest: PropTypes.string.isRequired,
    twitter: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired
  }).isRequired
};

// Export Area
export default FooterComponent;