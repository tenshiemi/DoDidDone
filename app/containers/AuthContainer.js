import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { signUpUser, logInUser } from '../actions/authAction';
import AuthModals from '../components/AuthModals';

class AuthContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      modalState: 'login',
      userLoggedIn: false
    };

    this.actions = {
      handleClose: this.handleClose.bind(this),
      handleSubmission: this.handleSubmission.bind(this),
      handleOpen: this.handleOpen.bind(this)
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
    return (
      <AuthModals
        actions={this.actions}
        state={this.state}
      />
    );
  }
}

AuthContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.get('token'),
    user: state.auth.get('user')
  };
};

export default connect(mapStateToProps)(AuthContainer);
