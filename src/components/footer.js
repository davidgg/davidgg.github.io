import React from 'react';
import { Link } from 'gatsby';

const Footer = () => (
  <footer className="bar">
    <div className="centered">
      <div className="net-spots-wrapper">
        <a
          href="https://github.com/davidgg"
          title="David GG Github"
          className="net-spot github"
        >
          Github
        </a>
        <a
          href="https://twitter.com/deibiz"
          title="David GG Twitter"
          className="net-spot tw"
        >
          Twitter
        </a>
        <a
          href="http://instagram.com/deibiz"
          title="David GG Instagram"
          className="net-spot instg"
        >
          Instagram
        </a>
      </div>

      <p className="copyright">
        © {new Date().getFullYear()} David Garmendia. All Rights Reserved.{' '}
        <Link to="/cookies">Check Cookies Policy</Link>. Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </p>
    </div>
  </footer>
);

export default Footer;
