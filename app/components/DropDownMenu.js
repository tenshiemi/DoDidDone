import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import { Link } from 'react-router';

injectTapEventPlugin();

const DoDoneDidDropDownMenu = () => (
  <div>
    <DropDownMenu>
      <MenuItem value={1} primaryText="User Profile" />
      <MenuItem value={2} primaryText="Logout" />
    </DropDownMenu>
  </div>
);

export default DoDoneDidDropDownMenu;
