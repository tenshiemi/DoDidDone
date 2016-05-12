import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { removeTodoItem } from '../actions/todosAction';
import { editTodoItem } from '../actions/todosAction';
import { toggleTodoStatus } from '../actions/todosAction';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';

export class TodoItem  extends React.Component  {
    this.state = {
      editing: false,
      todoItem: {},
      index: [],
      dispatch: {}
    };
  }
  render() {
    return (
      <li className="todo-list__item">
       <TextField ref="editTodo"/>
        <div className="todo-item__checkbox">
          <Checkbox aria-label="Checkbox" checked={ todoItem.completed } onClick={ () => {
            dispatch(toggleTodoStatus(index, todoItem._id));
          }}/>
        </div>
        <span className="todo-list__text">
          <span id="todo">
            { todoItem.text }  &nbsp;&nbsp;
          </span>
          <a onClick={ () => {
            dispatch(removeTodoItem(index, todoItem._id));
          }}>
            <i className="material-icons material-icons__delete" aria-label="Delete">
              delete_forever
            </i>
          </a>
          <a onClick={ () => {
            this.refs.editTodo.focus()
            const editedTodo = prompt('Edit Todo Item Below:');
            dispatch(editTodoItem(index, todoItem._id, editedTodo));
          }}>
            <i className="material-icons material-icons__edit" aria-label="Delete">
              mode_edit
            </i>
          </a>
        </span>
      </li>
    );
  }
}

TodoItem.propTypes = {
  todoItem: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect()(TodoItem);
