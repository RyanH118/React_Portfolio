import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
        <Link to="/About">
            About Me
        </Link>
        <Link to="/Portfolio">
            Portfolio
        </Link>
        <Link to="/Contact">
            Contact
        </Link>
        <Link to="/Resume">
            Resume
        </Link>
    </nav>
  );
};

export default Nav;