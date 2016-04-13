import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todosAction';
import RaisedButton from 'material-ui/lib/raised-button';

const AddTodo = ({ dispatch }) => {
  let input;

  const style = {
    margin: 12
  };

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <RaisedButton label="Add" style={style} primary={true} onClick={() => {
        dispatch(addTodo(input.value));
        input.value = '';
      }} />
    </div>
  );
};


AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(AddTodo);
