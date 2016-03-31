var React = require('react');
var ReactDOM = require('react-dom');
var Greeting = require('./components/Greeting');

var App = React.createClass({
  render: function(){
    return (
      <div>
        <p>Hello Universe!!!!</p>
        <Greeting />
      </div>
    )
  }
});

ReactDOM.render(<App />, document.getElementById('app'))
