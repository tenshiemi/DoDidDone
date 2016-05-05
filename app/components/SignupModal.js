import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class SignupModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      modalState: 'signup'
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

    return (
      <div className="navbar__signup-button">
        <Dialog
          title="DoDoneDid Signup"
          actions={signupActions}
          modal={true}
          open={this.state.open}
          onRequestClose={this.handleClose}
          >
            Complete the fields below to create your account.
        </Dialog>
      </div>
    );
  }
}

export default SignupModal;
