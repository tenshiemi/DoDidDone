import React from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';


const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  }
};

const HelpTabs = () => (
  <Tabs>
    <Tab label="FAQs">
      <div>
        <h2 style={styles.headline}>FAQs</h2>
          <p>Some content and Frequently Asked Questions Go Here</p>
      </div>
    </Tab>
    <Tab label="Contact">
      <div>
        <h2 style={styles.headline}>Contact</h2>
        <p>Some Truss Contact Related Content Goes Here</p>
      </div>
    </Tab>
  </Tabs>
);

export default HelpTabs;
