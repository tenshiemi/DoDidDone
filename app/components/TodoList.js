import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import { addTodo } from '../actions/todosAction';
import { connect } from 'react-redux';

let input;

const style = {
  margin: 12
};

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  submitTodo(e) {
    e.preventDefault();
    this.props.addTodo(input.value);
  }
  render() {
    let listItems = this.props.state.todoList.map((todoItem, index) => {
      return <li key={index}> {todoItem} </li>;
    });

    return (
      <div>
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

const mapStateToProps = (state) => {
  return {
    state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo(text) {
      dispatch(addTodo(text));
    }
  };
};

const TodoListApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListApp;
