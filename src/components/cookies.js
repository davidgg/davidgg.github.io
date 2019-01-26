import React from 'react';

const Cookies = () => (
  <div className="policy-container centered">
    <h1>Cookies Policy</h1>
    <h2>How we use Cookies</h2>
    <p>
      Cookies are very small text files that are stored on your computer when
      you visit some websites.
    </p>

    <p>
      We use cookies to help identify your computer so we can tailor your user
      experience, track shopping basket contents and remember where you are in
      the order process.
    </p>

    <p>
      You can disable any cookies already stored on your computer, but these may
      stop our website from functioning properly.
    </p>

    <h2>What are the different types of cookies?</h2>
    <p>
      A cookie can be classified by its lifespan and the domain to which it
      belongs. By lifespan, a cookie is either a:
    </p>
    <ul>
      <li>
        <span>Session</span> cookie which is erased when the user closes the
        browser
      </li>
      <li>
        <span>Persistent</span> cookie which remains on the user's
        computer/device for a pre-defined period of time.
      </li>
    </ul>

    <p>As for the domain to which it belongs, there are either:</p>
    <ul>
      <li>
        <span>First-party</span> cookies which are set by the web server of the
        visited page and share the same domain
      </li>
      <li>
        <span>Third-party</span> cookies stored by a different domain to the
        visited page's domain. This can happen when the webpage references a
        file, such as JavaScript, located outside its domain.
      </li>
    </ul>

    <p>Types of cookies by purpose</p>
    <ul>
      <li>
        <span>Techniques:</span> These allow the user to navigate through a web
        page or application platform and the use of different options or
        services it exist as.
      </li>

      <li>
        <span>Customization</span>: These allow the user to access the service
        with some features of a general nature based on a predefined set of
        criteria in the user terminal such as would be the language, the type of
        browser through which you access the service , the locale from which you
        access the service, etc.
      </li>

      <li>
        <span>Analysis:</span> are those that allow the responsible therefor ,
        monitoring and analyzing the behavior of users of the web sites you are
        linked.
      </li>
    </ul>

    <h2>Cookies used in this web</h2>
    <table>
      <thead>
        <tr>
          <th>Cookie</th>
          <th>Service</th>
          <th>Entity</th>
          <th>Duration</th>
          <th>Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cloudflare</td>
          <td>Cloudflare</td>
          <td>Cloudflare</td>
          <td>Session, Persistent</td>
          <td>Techniques, Template, Analysis</td>
        </tr>
      </tbody>
    </table>

    <h2>How do I disable cookies?</h2>
    <ul>
      <li>
        <span>Internet Explorer:</span> Tools, Internet Options, Privacy,
        Settings.
      </li>
      <li>
        <span>Firefox:</span> Tools, Options, Privacy, History, Custom Settings.
      </li>
      <li>
        <span>Chrome:</span> Settings, Show Advanced Options, Privacy, Content
        Settings.
      </li>
      <li>
        <span>Safari:</span> Preferences, Security.
      </li>
    </ul>
  </div>
);

export default Cookies;
