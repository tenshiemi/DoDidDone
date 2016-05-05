import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    console.log(props, 'LoginModal');
  }

  handleOpen(modalState) {
    return this.setState({ open: true, modalState });
  }
  handleClose() {
    return this.setState({ open: false });
  }
  render() {
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
      <div className="navbar__login-button">
        <Dialog
          title="DoDoneDid Login"
          actions={loginActions}
          modal={true}
          open={this.state.open}
          onRequestClose={this.handleClose}
          >
            Login to your DoDoneDid account.
        </Dialog>
        </div>
      );
  }
}

export default LoginModal;
