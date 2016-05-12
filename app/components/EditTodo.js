import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

export const EditTodo = ({ text, saveEdit, cancelEdit }) => {
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
     <span>
      <TextField
        hintText="Edit todo item"
        id="editTodoItem"
        aria-label="Edit todo item"
        defaultValue={text}
        aria-label="Edit todo item"
        onKeyPress={submitOnEnter}
      />
      <RaisedButton label="Cancel" onClick={cancelEdit} />
      <RaisedButton label="Save" onClick={editTodo} />
    </span>
  );
};

EditTodo.propTypes = {
  text: PropTypes.string.isRequired,
  saveEdit: PropTypes.func.isRequired,
  cancelEdit: PropTypes.func.isRequired
};

export default connect()(EditTodo);

