import React from 'react';
import { Link } from 'react-router';
import AuthContainer from '../containers/AuthContainer';
import DropDownMenu from './DropDownMenu';
import { Toolbar, ToolbarTitle, ToolbarGroup } from 'material-ui/Toolbar';

export class Nav extends React.Component {
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={ true }
        onTouchTap={ () => this.handleClose() }
      />,
      <FlatButton
        label="Submit"
        primary={ true }
        keyboardFocused={ true }
        onTouchTap={ () => this.handleClose() }
      />
    ];

    const modalTitle = {
      signup: {
        title: 'DoDoneDid Signup'
      },
      login: {
        title: 'DoDoneDid Login'
      }
    };

    return (
      <Toolbar className="navbar" iconElementLeft={ <div /> }>
        <Link to={ '/' } className="navbar__title">
          <ToolbarTitle text="DoDoneDid" />
        </Link>
        <div className="navbar__container">
          <ToolbarGroup firstChild={ true }>
              <AuthContainer />
              <DropDownMenu />
          </ToolbarGroup>
        </div>
      </Toolbar>
    );
  }
}

export default Nav;
