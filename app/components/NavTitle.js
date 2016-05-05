import React from 'react';
import Subheader from 'material-ui/Subheader';

const style = {
  color: 'white',
  fontSize: 'xx-large',
  fontWeight: 'bold',
  width: 1,
  position: 'fixed',
  marginTop: 10
  // padding: 10
};

export const NavTitle = () => (
  <div>
    <Subheader style={ style }>
      DoDoneDid
    </Subheader>
  </div>
);

export default NavTitle;
