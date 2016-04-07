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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoItems: toDoList,
      anotherProp: 'hello'
    };
    // this.addToDo = this.addToDo.bind(this);
  }
  addToDo(e) {
    e.preventDefault();
    this.setState({ toDoItems: this.state.toDoItems.concat(input.value) });
    // this.state = Object.assign({}, this.state, {
    //   toDoItems: this.state.toDoItems.concat(input.value)
    // });
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
          (e) => this.addToDo(e)
        } />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
