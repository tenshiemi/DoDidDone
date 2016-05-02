import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { removeTodoItem } from '../actions/todosAction';
import { editTodoItem } from '../actions/todosAction';
import { toggleTodoStatus } from '../actions/todosAction';
import Checkbox from 'material-ui/Checkbox';

const TodoItem = ({ todoItem, index, dispatch }) => {
  const style = {
    width: '40px',
    display: 'inline-block'
  };

  return (
    <li className="todo-list__item">
      <div style={ style } >
        <Checkbox aria-label="Checkbox" checked={ todoItem.completed } onClick={ () => {
          dispatch(toggleTodoStatus(index, todoItem._id));
        }}/>
      </div>
      <span className="todo-item__text">{ todoItem.text }&nbsp;&nbsp;
      <a onClick={ () => {
        dispatch(removeTodoItem(index, todoItem._id));
      }}>
        <i
          className="material-icons material-icons__delete"
          aria-label="Delete">delete_forever
        </i>
      </a>
      <a onClick={ () => {
        const editedTodo = prompt('Edit Todo Item Below:');
        dispatch(editTodoItem(index, editedTodo));
      }}>
        <i
          className="material-icons material-icons__edit"
          aria-label="Delete">mode_edit
        </i>
      </a>
      </span>
    </li>
  );
};

TodoItem.propTypes = {
  todoItem: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect()(TodoItem);
