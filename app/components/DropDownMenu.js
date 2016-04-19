import React from 'react';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

export default class DoDoneDidDropDownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 1 };
  }

  render() {
    return (
      <DropDownMenu value={this.state.value}>
        <MenuItem value={1} primaryText="User Profile" />
        <MenuItem value={2} primaryText="Logout" />
      </DropDownMenu>
    );
  }
}
