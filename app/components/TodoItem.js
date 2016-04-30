import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { removeTodoItem } from '../actions/todosAction';
import { toggleTodo } from '../actions/todosAction';
import Checkbox from 'material-ui/Checkbox';

const TodoItem = ({ todoItem, index, dispatch }) => {
  const style = {
    width: '40px',
    display: 'inline-block'
  };

  return (
    <li className="todo-list-item">
      <div style={ style } >
        <Checkbox aria-label="Checkbox" checked={ todoItem.completed } onClick={ () => {
          dispatch(toggleTodo(index));
        }}/>
      </div>
      <span className="todo-item-text">{ todoItem.text }&nbsp;&nbsp;
      <a onClick={ () => {
        dispatch(removeTodoItem(index));
      }}>
        <i
          className="material-icons material-icons--delete-button"
          aria-label="Delete">delete_forever
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
