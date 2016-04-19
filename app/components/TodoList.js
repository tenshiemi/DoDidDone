import React, { PropTypes } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todoItems }) => (
  <ul className="todo-list">
    { todoItems.map((todoItem, index) =>
      <TodoItem key={ index } todoItem={ todoItem } index={ index } />
    )}
  </ul>
);

TodoList.propTypes = {
  todoItems: PropTypes.array.isRequired
};

export default TodoList;
