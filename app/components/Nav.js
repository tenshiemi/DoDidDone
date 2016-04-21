import React from 'react';
import { Link } from 'react-router';
import DropDownMenu from './DropDownMenu';
import AppBar from 'material-ui/AppBar';

const Nav = () => (
  <div>
    <AppBar
      iconElementLeft={<div />}
      containerElement={ <Link to="/" /> }
      title="DoDoneDid"
    >
      <DropDownMenu />
    </AppBar>
  </div>
);

export default Nav;


