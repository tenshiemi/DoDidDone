import React from 'react';
import { Link } from 'react-router';
import AuthContainer from '../containers/AuthContainer';
import NavMenuContainer from '../containers/NavMenuContainer';
import { Toolbar, ToolbarTitle, ToolbarGroup } from 'material-ui/Toolbar';

export const Nav = () => (
  <Toolbar className="navbar" iconElementLeft={<div />}>
    <Link to={'/'} className="navbar__title">
      <ToolbarTitle text="DoDoneDid" />
    </Link>
    <div className="navbar__container">
      <ToolbarGroup firstChild>
          <AuthContainer />
          <NavMenuContainer />
      </ToolbarGroup>
    </div>
  </Toolbar>
);

export default Nav;
