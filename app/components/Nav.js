import React from 'react';
import { Link } from 'react-router';
import DropDownMenu from './DropDownMenu';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleOpen(){
    return this.setState({ open: true });
  }
  handleClose(){
    return this.setState({ open: false });
  }

  render() {
    const signupActions = [
      <FlatButton
        className="navbar__modal-cancel-button"
        className="navbar__modal-signup-button"
        label="Cancel"
        primary={ true }
        onTouchTap={ () => this.handleClose() }
      />,
      <FlatButton
        label="Signup"
        primary={ true }
        keyboardFocused={ true }
        onTouchTap={ () => this.handleClose() }
      />
    ];

    const loginActions = [
      <FlatButton
        className="navbar__modal-cancel-button"
        label="Cancel"
        primary={ true }
        onTouchTap={ () => this.handleClose() }
      />,
      <FlatButton
        className="navbar__modal-login-button"
        label="Login"
        primary={ true }
        keyboardFocused={ true }
        onTouchTap={ () => this.handleClose() }
      />
    ];

    return (
      <div>
        <AppBar
          iconElementLeft={<div />}
          containerElement={ <Link to="/" /> }
          title="DoDoneDid"
        >
          <FlatButton label="Login" secondary={ true } onTouchTap={ () => this.handleOpen() } />
          <FlatButton label="Signup" secondary={ true } onTouchTap={ () => this.handleOpen() } />
          <DropDownMenu />
          <Dialog
            className="navbar__login-button"
            title="DoDoneDid Login"
            actions={loginActions}
            modal={true}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
          Login to your DoDoneDid account.
          </Dialog>
          <Dialog
            className="navbar__signup-button"
            title="DoDoneDid Signup"
            actions={signupActions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
          Complete the fields below to create an account.
          </Dialog>
        </AppBar>
      </div>
      );
  }
}

export default Nav;


