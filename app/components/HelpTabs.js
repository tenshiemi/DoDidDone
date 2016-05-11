import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { browserHistory } from 'react-router';

export class HelpTabs extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
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
        <Tab label="FAQs" onActive={this.handleChange} />
        <Tab label="Contact" onActive={this.handleChange} />
      </Tabs>
    );
  }
}

export default HelpTabs;
