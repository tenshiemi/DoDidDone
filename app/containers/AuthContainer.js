import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { signUpUser, logInUser } from '../actions/authAction';
import Dialog from 'material-ui/Dialog';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import FlatButton from 'material-ui/FlatButton';
import LogoutButton from '../components/LogoutButton';

class AuthContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      modalState: 'login',
      userLoginStatus: 'loggedOut'
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);

    console.log(this.state);
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
        className="modal-button"
        label="Cancel"
        primary
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        className="modal-button"
        label="Submit"
        primary
        keyboardFocused
        onTouchTap={this.handleSubmission}
      />
    ];

    const modalTitle = {
      signup: 'Create Account',
      login: 'Log In'
    };

    return (
      <div>
        {this.state.userLoginStatus === 'loggedOut' ? (
          <div>
            <FlatButton
              label="Log in"
              secondary
              onTouchTap={
                () => this.handleOpen('login')
              }
            />
            <FlatButton
              label="Sign up"
              secondary
              onTouchTap={
                () => this.handleOpen('signup')
              }
            />
          </div>
        ) : (
          <LogoutButton />
        )}
        <Dialog
          title={modalTitle[this.state.modalState]}
          actions={actions}
          modal
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          {this.state.modalState === 'login' ? (<LoginForm />) : (<SignupForm />)}
        </Dialog>
      </div>
    );
  }
}

AuthContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(AuthContainer);
