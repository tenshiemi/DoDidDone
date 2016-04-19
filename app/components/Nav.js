import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import DoDoneDidDropDownMenu from './DropDownMenu';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AppBar
          title="DoDoneDid"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <DoDoneDidDropDownMenu />
      </div>
    );
  }
}
export default Nav;
