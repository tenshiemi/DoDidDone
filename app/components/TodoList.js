import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../actions/todosAction';

const TodoList = ({ todoItems, dispatch }) => (
  <ul className="ToDoList">
    { todoItems.map((todoItem, index) =>
      <li>
        { todoItem }
       <a onClick={ () => {
          dispatch(removeTodo(index));
        } } key={ index }>
          <span> Delete</span>
        </a>
      </li>
    )}
  </ul>
);

TodoList.propTypes = {
  todoItems: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect()(TodoList);
