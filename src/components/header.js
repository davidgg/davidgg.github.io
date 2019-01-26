import { Link } from 'gatsby';
import React from 'react';

const Header = () => (
  <header className="bar">
    <h1 className="title-page">David García G.</h1>
    <nav className="centered">
      <ul>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <a href="#experience" title="My Experience">
            Experience
          </a>
        </li>
        <li>
          <a href="#projects" title="Projects">
            Projects
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
