import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';


export const EditTodo = ({ text }) => (
    <TextField
      hintText="Edit todo item"
      id="editTodoItem"
      aria-label="Edit todo item"
      defaultValue={text}
    />
);

EditTodo.propTypes = {
  text: PropTypes.string.isRequired
};

export default EditTodo;
