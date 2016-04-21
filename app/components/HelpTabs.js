import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { browserHistory } from 'react-router';

class HelpTabs extends Component {
  constructor(props) {
    super(props);
  }
  handleChange(e) {
    if (e.props.label === 'Contact') {
      browserHistory.push('/help/contact');
    } else {
      browserHistory.push('/help/faqs');
    }
  }
  render() {
    return (
      <Tabs>
        <Tab label="FAQs" onActive={(e) => {
          this.handleChange.call(this, e);
        }} />
        <Tab label="Contact" onActive={(e) => {
          this.handleChange.call(this, e);
        }} />
      </Tabs>
    );
  }
}

export default HelpTabs;
