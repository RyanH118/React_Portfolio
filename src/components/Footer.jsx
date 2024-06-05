import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/Ryanh118" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/ryanh118/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </footer>
  );
};

export default Footer;