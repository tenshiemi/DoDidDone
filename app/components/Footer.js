import React from 'react';
import { Link } from 'react-router';

const Footer = () => (
  <div>
    <p>Copyright TrussWorks, 2016</p>
    <p>Onesies for Life (until something else sounds more fun)</p>
    <Link to={ 'about' }>Link to About</Link>
  </div>
);

export default Footer;
// From http://redux.js.org/docs/basics/UsageWithReact.html
