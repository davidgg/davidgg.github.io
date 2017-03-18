import { jquery } from 'jquery';
import { cookieChoices } from './cookieChoices';
import '../scss/ench.scss';

function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('../img/', false, /.*$/));

cookieChoices.showCookieConsentBar(
  'We use cookies to improve your experience on this website. By continuing to browse our site you agree to our use of cookies.',
  'close message',
  'learn more',
  '/cookies.html'
);
