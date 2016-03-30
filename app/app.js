var React = require('react');

var App = React.createClass({
  render: function(){
    return (
      <p>Hello World!!!!</p>
    )
  }
});

React.render(
  <App />,
  document.getElementById('app')
)
