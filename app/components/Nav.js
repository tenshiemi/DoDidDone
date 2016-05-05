import React from 'react';
import { Link } from 'react-router';
import DropDownMenu from './DropDownMenu';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';


export class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      modalState: 'login'
    };
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

    const modalProperties = {
      signup: {
        title: 'DoDoneDid Signup',
        actions: signupActions
      },
      login: {
        title: 'DoDoneDid Login',
        actions: loginActions
      }
    };

    return (
      <div>
        <AppBar
          iconElementLeft={<div />}
          containerElement={ <Link to="/" /> }
          title="DoDoneDid"
        >
          <FlatButton label="Login" secondary={ true } onTouchTap={
              () => this.handleOpen('login')} />
          <FlatButton label="Signup" secondary={ true } onTouchTap={
              () => this.handleOpen('signup') } />
          <Dialog
            title={ modalProperties[this.state.modalState].title }
            actions={ modalProperties[this.state.modalState].actions }
            modal={ true }
            open={ this.state.open }
            onRequestClose={ this.handleClose }
          >
            { this.state.modalState === 'login' ? (<LoginForm />) : (<SignupForm />) }
          </Dialog>
          <DropDownMenu />
        </AppBar>
      </div>
      );
  }
}

export default Nav;
