import React, { PropTypes } from 'react';
import HelpTabs from '../components/HelpTabs';

export const Help = (props) => (
  <div>
    <HelpTabs />
    {props.children}
  </div>
);

Help.propTypes = {
  children: PropTypes.node.isRequired
};

export default Help;
