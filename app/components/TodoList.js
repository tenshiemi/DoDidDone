import React, { PropTypes } from 'react';

const TodoList = ({ todoItems }) => (
  <ul className="ToDoList">
    { todoItems.map((todoItem, index) =>
      <li key={ index }> { todoItem } </li>
    )}
  </ul>
);

TodoList.propTypes = {
  todoItems: PropTypes.array.isRequired
};

export default TodoList;
