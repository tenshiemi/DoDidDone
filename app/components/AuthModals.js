import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

export const AuthModals = ({ state, actions }) => {
  const modalActions = [
    <FlatButton
      className="modal-button"
      label="Cancel"
      primary
      onTouchTap={actions.handleClose}
    />,
    <FlatButton
      className="modal-button"
      label="Submit"
      primary
      keyboardFocused
      onTouchTap={actions.handleSubmission}
    />
  ];

  const modalTitle = {
    signup: 'Create Account',
    login: 'Log In'
  };

  return (
    <div>
      {!localStorage.getItem('id_token') ? (
        <div>
          <FlatButton
            label="Log in"
            secondary
            onTouchTap={
              () => actions.handleOpen('login')
            }
          />
          <FlatButton
            label="Sign up"
            secondary
            onTouchTap={
              () => actions.handleOpen('signup')
            }
          />
        </div>
      ) : (null)}
      <Dialog
        title={modalTitle[state.modalState]}
        actions={modalActions}
        modal
        open={state.open}
        onRequestClose={actions.handleClose}
      >
        {state.modalState === 'login' ? (<LoginForm />) : (<SignupForm />)}
      </Dialog>
    </div>
  );
};

AuthModals.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default AuthModals;
