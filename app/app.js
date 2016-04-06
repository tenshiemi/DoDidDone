import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/lib/raised-button';
import Nav from './components/Nav';
require('../styles/custom.scss');

const toDoList = ['Some text.'];

let input;

const style = {
  margin: 12
};

const addToDo = () => {
  toDoList.push(input.value);
};

const App = React.createClass({
  getInitialState: function() {
    return {
      toDoItems: toDoList
    }
  },
  render: function() {
    let listItems = this.state.toDoItems.map((toDoItem, index) => {
      console.log(toDoItem);
      return <li key={index}> {toDoItem} </li>;
    });

    return (
      <div>
        <Nav />
        <ul className="ToDoList">{listItems}</ul>
        <input ref={node => {
          input = node;
        }} />
        <RaisedButton label="Our Button" style={style} primary={true} onClick={addToDo} />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
