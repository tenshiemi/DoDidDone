import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import DoDoneDidDropDownMenu from './DropDownMenu';

const Nav = () => (
  <div>
    <AppBar title="DoDoneDid" iconClassNameRight="muidocs-icon-navigation-expand-more">
      <DoDoneDidDropDownMenu />
    </AppBar>
  </div>
);

export default Nav;


