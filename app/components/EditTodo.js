import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';

export const EditTodo = ({ text, saveEdit }) => {
  const editTodo = () => {
    let inputField = document.getElementById('editTodoItem');

    if (inputField.value !== '') {
      saveEdit(inputField.value);
      inputField.value = '';
    }
  };

  const submitOnEnter = (e) => {
    if (e.key === 'Enter') {
      editTodo();
    }
  };

  return (
    <TextField
      hintText="Edit todo item"
      id="editTodoItem"
      aria-label="Edit todo item"
      defaultValue={text}
      aria-label="Edit todo item"
      onKeyPress={submitOnEnter}
    />
  );
};

EditTodo.propTypes = {
  text: PropTypes.string.isRequired,
  saveEdit: PropTypes.func.isRequired
};

export default connect()(EditTodo);

