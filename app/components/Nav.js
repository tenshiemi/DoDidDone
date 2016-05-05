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
      open: true,
      modalState: 'login'
    }
  }

  handleOpen(modalState) {
    return this.setState({ open: true, modalState });
  }

  handleClose() {
    return this.setState({ open: false });
  }

  render() {
    const signupActions = [
      <FlatButton
        className="navbar__modal-cancel-button"
        label="Cancel"
        primary={ true }
        onTouchTap={ () => this.handleClose() }
      />,
      <FlatButton
        label="Signup"
        className="navbar__modal-signup-button"
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
          <FlatButton label="Login" secondary={ true } onTouchTap={
              () => this.handleOpen('login')}>
              <Dialog
                title="DoDoneDid Login"
                actions={loginActions}
                modal={true}
                open={this.state.open}
                onRequestClose={this.handleClose}
                // props={this.props.modalState}
                >
                  Login to your DoDoneDid account.
              </Dialog>
          </FlatButton>

          <FlatButton label="Signup" secondary={ true } onTouchTap={
              () => this.handleOpen('signup') }>
              <Dialog
                title="DoDoneDid Signup"
                actions={signupActions}
                modal={true}
                open={this.state.open}
                onRequestClose={this.handleClose}
                // props={this.props.modalState}
                >
                  Complete the fields below to create your account.
              </Dialog>
          </FlatButton>
          <DropDownMenu />
        </AppBar>
      </div>
      );
  }
}

export default Nav;
