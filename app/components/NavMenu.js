import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

const NavMenu = ({ actions, state }) => (
  <div>
    {localStorage.getItem('id_token') ? (
      <div>
        <FlatButton
          onTouchTap={actions.handleTouchTap}
          label="Menu"
          rippleColor={"#FFFFFF"}
          style={{ color: '#FFFFFF' }}
        />
        <Popover
          open={state.open}
          anchorEl={state.anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={actions.handleRequestClose}
        >
          <Menu>
            <MenuItem value={1}><Link to={'about'}>About us</Link></MenuItem>
            <MenuItem value={2}><Link to={'help'}>Help</Link></MenuItem>
            <MenuItem value={3}><a href="#" onClick={actions.logOutUser}>Log out</a></MenuItem>
          </Menu>
        </Popover>
      </div>
    ) : (null)}
  </div>
);

NavMenu.propTypes = {
  actions: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired
};

export default NavMenu;
