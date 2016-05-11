import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { signUpUser, logInUser } from '../actions/authAction';
import Dialog from 'material-ui/Dialog';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import FlatButton from 'material-ui/FlatButton';

class AuthContainer extends React.Component {
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
  handleSubmission() {
    if (this.state.modalState === 'signup') {
      this.submitNewUser();
    } else {
      this.attemptUserLogin();
    }

    this.handleClose();
  }
  submitNewUser() {
    const newUser = {
      name: document.getElementById('nameField').value || '',
      email: document.getElementById('emailField').value,
      password: document.getElementById('passwordField').value
    };

    this.props.dispatch(signUpUser(newUser));
  }
  attemptUserLogin() {
    const userCredentials = {
      email: document.getElementById('userEmail').value,
      password: document.getElementById('userPassword').value
    };

    this.props.dispatch(logInUser(userCredentials));
  }
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
        onTouchTap={ () => this.handleSubmission() }
      />
    ];

    const modalTitle = {
      signup: 'Create Account',
      login: 'Log In'
    };

    return (
      <div>
        <FlatButton label="Log in" secondary={ true } onTouchTap={
            () => this.handleOpen('login')} />
        <FlatButton label="Sign up" secondary={ true } onTouchTap={
            () => this.handleOpen('signup') } />
        <Dialog
          title={ modalTitle[this.state.modalState] }
          actions={ actions }
          modal={ true }
          open={ this.state.open }
          onRequestClose={ this.handleClose }
        >
          { this.state.modalState === 'login' ? (<LoginForm />) : (<SignupForm />) }
        </Dialog>
      </div>
    );
  }
}

AuthContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(AuthContainer);
