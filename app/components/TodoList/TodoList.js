import React, { PropTypes } from 'react';
import TodoItem from './TodoItem';
import { List } from 'immutable';

export const TodoList = ({ todoItems, actions }) => (
  <ul className="todo-list">
    {todoItems.map((todoItem, index) =>
      <TodoItem
        key={index}
        todoItem={todoItem}
        index={index}
        actions={actions}
      />
    )}
  </ul>
);

TodoList.propTypes = {
  actions: PropTypes.object.isRequired,
  todoItems: PropTypes.instanceOf(List)
};

export default TodoList;
