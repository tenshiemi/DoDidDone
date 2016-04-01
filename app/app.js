import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/lib/raised-button';

const style = {
  margin: 12
};

const App = React.createClass({
  render: function() {
    return (
      <div>
        <p>Hello Multiverse!!!!</p>
        <RaisedButton label="Our Button" style={style} primary={true} />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
