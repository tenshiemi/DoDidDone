import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { removeTodoItem } from '../actions/todosAction';
import { editTodoItem } from '../actions/todosAction';
import { toggleTodoStatus } from '../actions/todosAction';
import Checkbox from 'material-ui/Checkbox';

export const TodoItem = ({ todoItem, index, dispatch }) => {
  return (
    <li className="todo-list__item">
      <div className="todo-item__checkbox">
        <Checkbox
          aria-label="Checkbox"
          checked={todoItem.completed}
          onClick={() => dispatch(toggleTodoStatus(index, todoItem._id))}
        />
      </div>
      <span className="todo-list__text">
        {todoItem.text}&nbsp;&nbsp;
        <a onClick={() => {
          dispatch(removeTodoItem(index, todoItem._id));
        }}
        >
          <i className="material-icons material-icons__delete" aria-label="Delete">
            delete_forever
          </i>
        </a>
        <a onClick={() => {
          const editedTodo = prompt('Edit Todo Item Below:');
          dispatch(editTodoItem(index, todoItem._id, editedTodo));
        }}
        >
          <i className="material-icons material-icons__edit" aria-label="Delete">
            mode_edit
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
