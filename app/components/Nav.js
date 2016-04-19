import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import DoDoneDidDropDownMenu from './DropDownMenu';
import { Link } from 'react-router';

const Nav = () => (
  <div>
    <AppBar containerElement={<Link to="/"/>} title="DoDoneDid">
      <DoDoneDidDropDownMenu />
    </AppBar>
  </div>
);

export default Nav;


