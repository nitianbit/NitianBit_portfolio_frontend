import React from 'react';
import '../Social_Icons/style.css';
import {
 Col,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function SocialIcons() {
  return (
         <Col xl={12} className="social-icons">
          &nbsp; &nbsp; &nbsp; &nbsp;
          <a href="https://lnkd.in/ehmxEhPR" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="fb" icon={faFacebook} />
          </a>
          <a href="https://github.com/motasimfoad" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="git" icon={faGithub} />
          </a>
          <a href="https://twitter.com/okrittim" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="twitter" icon={faTwitter} />
          </a>
          <a href="https://lnkd.in/e-2-7_R5" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="insta" icon={faInstagram} />
          </a>
          <a href="https://lnkd.in/ehmxEhPR" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
          </a>
         </Col>
  );
}

export default SocialIcons;
