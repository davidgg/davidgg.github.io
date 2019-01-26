import { Link } from 'gatsby';
import React from 'react';

const Header = () => (
  <header className="bar">
    <h1 className="title-page">David Garmendia.</h1>
    <nav className="centered">
      <ul>
        <li>
          <Link to="/#about">About Me</Link>
        </li>
        <li>
          <Link to="/#experience">Experience</Link>
        </li>
        <li>
          <Link to="/#projects">Projects</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
