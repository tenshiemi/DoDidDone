import React from 'react';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Link } from 'react-router';

injectTapEventPlugin();

const DoDoneDidDropDownMenu = () => (
  <div>
    <DropDownMenu>
      <MenuItem value={1} primaryText="User Profile" />
      <MenuItem value={2} primaryText="Logout" />
      <Link to={ 'help' }><MenuItem value={3} primaryText="Help" /></Link>
    </DropDownMenu>
  </div>
);

export default DoDoneDidDropDownMenu;
