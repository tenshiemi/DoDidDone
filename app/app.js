import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/lib/raised-button';
import Nav from './components/Nav';
import toDos from './reducers/todoapp';
import { createStore } from 'redux';
import { addToDo } from './actions/todos';

//imported addToDo and changed function name
require('../styles/custom.scss');

let store = createStore(toDos);

let input;

const style = {
  margin: 12
};

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(store.getState());
    this.state = {
      toDoItems: store.getState(),
      anotherProp: 'hello'
    };
    // this.addToDo = this.addToDo.bind(this);
  }
  submitTodo(e) {
    e.preventDefault();
    this.setState({ toDoItems: [...this.state.toDoItems, input.value] });

  }
  render() {
    let listItems = this.state.toDoItems.map((toDoItem, index) => {
      return <li key={index}> {toDoItem} </li>;
    });

    return (
      <div>
        <Nav />
        <ul className="ToDoList">{listItems}</ul>
        <input ref={node => {
          input = node;
        }} />
        <RaisedButton label="Our Button" style={style} primary={true} onClick={
          (e) => this.submitTodo(e)
        } />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
