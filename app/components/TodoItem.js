import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../actions/todosAction';
import { toggleTodo } from '../actions/todosAction';
import Checkbox from 'material-ui/lib/checkbox';

const TodoItem = ({ todoItem, index, dispatch }) => (
  <li>
    <Checkbox className="react-toggle" checked={ todoItem.completed } onClick={ () => {
      dispatch(toggleTodo(index));
    }}/>
    { todoItem.text }
    <a onClick={ () => {
      dispatch(removeTodo(index));
    }}>
      <span> Delete</span>
    </a>
  </li>
);

TodoItem.propTypes = {
  todoItem: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect()(TodoItem);
