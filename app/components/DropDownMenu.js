import React from 'react';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import injectTapEventPlugin from 'react-tap-event-plugin';

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
