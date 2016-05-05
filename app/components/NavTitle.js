import React from 'react';
import Subheader from 'material-ui/Subheader';

const style = {
  color: 'white',
  fontSize: 'xx-large',
  fontWeight: 'bold',
  width: 1100,
  position: 'relative',
  marginTop: 10,
  padding: 0
};

export const NavTitle = () => (
  <div>
    <Subheader style={ style }>
      DoDoneDid
    </Subheader>
  </div>
);

export default NavTitle;
