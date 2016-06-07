import React, { PropTypes } from 'react';
import EditTodo from './EditTodo';

export const TodoText = ({ editing, text, onSave, onCancel }) => (
  <span className="todo-list__text">
      {editing === true ?
        (<span>
          <EditTodo
            text={text}
            saveEdit={onSave}
            cancelEdit={onCancel}
          />
         </span>) :
        (<span>{text} &nbsp;&nbsp;</span>)
      }
  </span>
);

TodoText.propTypes = {
  editing: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default TodoText;
