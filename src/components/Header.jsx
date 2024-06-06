import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  return (
    <header style={{ backgroundColor: '#98ccd3' }} className="navbar navbar-expand-lg ">
      <div className="container">
        <h1 className="navbar-brand">
          <Link to="/" className="text-dark text-decoration-none">
            Ryan Hinson
          </Link>
        </h1>
        <Nav />
      </div>
    </header>
  );
};
