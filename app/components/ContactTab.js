import React from 'react';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  }
};

const ContactTab = () => (
  <div>
    <h2 style={styles.headline}>Contact</h2>
    <p>Some Truss Contact Information Goes Here</p>
  </div>
);

export default ContactTab;
