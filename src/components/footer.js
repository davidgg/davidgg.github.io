import React from 'react';

const Footer = () => (
  <footer className="bar">
    <div className="centered">
      <div className="net-spots-wrapper">
        <a
          href="https://github.com/davidgg"
          title="David GG Github"
          className="net-spot github"
        />
        <a
          href="https://twitter.com/deibiz"
          title="David GG Twitter"
          className="net-spot tw"
        />
        <a
          href="http://instagram.com/deibiz"
          title="David GG Instagram"
          className="net-spot instg"
        />
      </div>

      <p className="copyright">
        © {new Date().getFullYear()} David Garmendia. All Rights Reserved.{' '}
        <a href="cookies.html">Check Cookies Policy</a>. Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </p>
    </div>
  </footer>
);

export default Footer;
