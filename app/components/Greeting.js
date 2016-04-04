import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

const Greeting = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hellooo</h1>
        <RaisedButton label="Def" />
      </div>
    );
  }
});

export default Greeting;
