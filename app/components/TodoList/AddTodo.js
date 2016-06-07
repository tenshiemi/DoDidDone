import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export const AddTodo = ({ onSubmit }) => {
  const addTodo = () => {
    let inputField = document.getElementById('addTodoText');

    if (inputField.value !== '') {
      onSubmit(inputField.value);
      inputField.value = '';
    }
  };

  const submitOnEnter = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div>
      <TextField
        hintText="Enter todo item"
        id="addTodoText"
        aria-label="Enter todo item"
        onKeyPress={submitOnEnter}
      />
      <RaisedButton
        className="addTodo__button"
        aria-label="Add Item"
        label="Add"
        className="add-todo__button"
        primary
        onClick={addTodo}
      />
    </div>
  );
};

AddTodo.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default AddTodo;
