import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import { logOutUser } from '../actions/authAction';

export class DropDownMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.logOutUser = this.logOutUser.bind(this);
  }
  handleTouchTap(e) {
    e.preventDefault();

    this.setState({
      open: true,
      anchorEl: e.currentTarget
    });
  }
  handleRequestClose() {
    this.setState({
      open: false
    });
  }
  logOutUser(e) {
    e.preventDefault();

    this.handleRequestClose();
    this.props.dispatch(logOutUser());
  }
  render() {
    const dropDownButton = {
      color: '#FFFFFF'
    };

    return (
      <div>
        {this.props.token !== null && this.props.user !== null ? (
          <div>
            <FlatButton
              onTouchTap={this.handleTouchTap}
              label="Click me"
              rippleColor={"#FFFFFF"}
              style={dropDownButton}
            />
            <Popover
              open={this.state.open}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
              targetOrigin={{ horizontal: 'left', vertical: 'top' }}
              onRequestClose={this.handleRequestClose}
            >
              <Menu>
                <MenuItem value={1}><Link to={'about'}>About us</Link></MenuItem>
                <MenuItem value={2}><Link to={'help'}>Help</Link></MenuItem>
                <MenuItem value={3}><a href="#" onClick={this.logOutUser}>Log out</a></MenuItem>
              </Menu>
            </Popover>
          </div>
        ) : (null)}
      </div>
    );
  }
}

DropDownMenu.propTypes = {
  dispatch: PropTypes.func.isRequired,
  token: PropTypes.string,
  user: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.get('token'),
    user: state.auth.get('user')
  };
};

export default connect(mapStateToProps)(DropDownMenu);
