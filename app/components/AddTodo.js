import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todosAction';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const AddTodo = ({ dispatch }) => {
  const style = {
    margin: 12
  };

  const addTodoItem = () => {
    let inputField = document.getElementById('addTodoText');
    dispatch(addTodo(inputField.value));
    inputField.value = '';
  };

  return (
    <div>
      <TextField
        hintText="Enter todo item"
        id="addTodoText"
        aria-label="Enter todo item"
        onKeyPress= { (e) => {
          if (e.key === 'Enter') {
            addTodoItem();
          }
        }} />
      <RaisedButton
        aria-label="Add Item"
        label="Add"
        style={ style }
        primary={ true }
        onClick={ () => {
          addTodoItem();
        }} />
    </div>
  );
};

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(AddTodo);
