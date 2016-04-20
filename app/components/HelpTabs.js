import React, { Component } from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import { browserHistory } from 'react-router';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  }
};

export default class HelpTabs extends Component {
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
