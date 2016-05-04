import React, { Component } from 'react';
import { Link } from 'react-router';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

export class DropDownMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
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
  render() {
    return (
      <div>
        <div className="navbar__dropdown-button">
          <FlatButton
            onTouchTap={ (e) => {
              this.handleTouchTap.call(this, e);
            }}
            label="Click me"
            rippleColor={"white"}
        />
        </div>

        <Popover
          open={ this.state.open }
          anchorEl={ this.state.anchorEl }
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={ () => {
            this.handleRequestClose.call(this);
          }}
        >
          <Menu>
            <MenuItem value={1}><Link to={ 'about' }>About us</Link></MenuItem>
            <MenuItem value={2}><Link to={ 'help' }>Help</Link></MenuItem>
            <MenuItem value={3} primaryText="Logout" />
          </Menu>
        </Popover>
      </div>
    );
  }
}

export default DropDownMenu;
