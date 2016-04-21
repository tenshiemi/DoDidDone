import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs/Tabs';
import { browserHistory } from 'react-router';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  }
};

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
      <Tabs styles={styles}>
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
