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
    let listItems = this.props.todoItems.map((todoItem, index) => {
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
  const { todoItems } = state;

  return {
    todoItems
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo(text) {
      dispatch(addTodo(text));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
