import React, { Component } from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
// import { browserHistory } from 'react-router'
// import { Link } from 'react-router';
// import Tab from './FAQs';
// import Tab from './ContactTab';

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
    console.log('e', e);
    this.context.router.push('/help/faqs');
  }

  render() {
    return (
      <Tabs styles={styles}>
        <Tab label="FAQs" onActive={(e) => {
          this.handleChange.apply(this, e);
        }} />
        <Tab label="Contact" onActive={(e) => {
          console.log(this, 'this');
          console.log(e, 'e');
          this.handleChange.apply(this, e);
        }} />
      </Tabs>
    );
  }
}

HelpTabs.contextTypes = {
  router: React.PropTypes.object.isRequired
};
