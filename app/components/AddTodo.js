import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todosAction';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

const AddTodo = ({ dispatch }) => {
  const style = {
    margin: 12
  };

  return (
    <div>
      <TextField
        hintText="Enter todo item"
        id="addTodoText"
      />
      <RaisedButton label="Add" style={style} primary={true} onClick={() => {
        let inputField = document.getElementById('addTodoText');
        dispatch(addTodo(inputField.value));
        inputField.value = '';
      }} />
    </div>
  );
};

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(AddTodo);
