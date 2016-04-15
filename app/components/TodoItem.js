import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../actions/todosAction';
import { toggleTodo } from '../actions/todosAction';
import Toggle from 'react-toggle';


const TodoItem = ({ todoItem, index, dispatch }) => (
  <li>
    <Toggle className="react-toggle" onClick={ () => {
      dispatch(toggleTodo(index));
    }}/>
    { todoItem }
    <a onClick={ () => {
      dispatch(removeTodo(index));
    }}>
      <span> Delete</span>
    </a>
  </li>
);

TodoItem.propTypes = {
  todoItem: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect()(TodoItem);
