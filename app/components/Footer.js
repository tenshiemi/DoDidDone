import React from 'react';
import { Link } from 'react-router';

const Footer = () => (
  <div className="app-container--footer">
    <p>
      Copyright TrussWorks, 2016
      Onesies for Life (until something else sounds more fun)
      <Link to={ 'about' }>Link to About</Link>
    </p>
  </div>
);

export default Footer;
