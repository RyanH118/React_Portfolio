import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#98ccd3' }} className="footer mt-5 py-3 fixed-bottom">
      <div className="container text-center">
        <a href="https://github.com/Ryanh118" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" className="text-dark mx-2" />
        </a>
        <a href="https://www.linkedin.com/in/ryanh118/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-dark mx-2" />
        </a>
        <a href="https://www.instagram.com/af1_ryan/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" className="text-dark mx-2" />
        </a>
      </div>
    </footer>
  );
};