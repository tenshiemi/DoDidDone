import React, { PropTypes } from 'react';
import HelpTabs from '../components/HelpTabs';

const Help = (props) => (
  <div>
    <HelpTabs />
    { props.children }
  </div>
);

Help.propTypes = {
  children: PropTypes.object.isRequired
};


export default Help;
