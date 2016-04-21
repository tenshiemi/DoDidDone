import React from 'react';
import DoDoneDidDropDownMenu from './DropDownMenu';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';

const Nav = () => (
  <div>
    <AppBar containerElement={<Link to="/" />} title="DoDoneDid">
      <DoDoneDidDropDownMenu />
    </AppBar>
  </div>
);

export default Nav;


