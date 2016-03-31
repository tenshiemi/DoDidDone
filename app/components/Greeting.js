import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

const Greeting = React.createClass({
  render: function() {
    return (
      <h1>Hello</h1>
      <RaisedButton label="Default" />
    )
  }
});

export default Greeting;
