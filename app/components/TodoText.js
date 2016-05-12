import React, { PropTypes } from 'react';

export const TodoText = ({ text }) => (
  <span>{text}  &nbsp;&nbsp;</span>
);

TodoText.propTypes = {
  text: PropTypes.string.isRequired
};

export default TodoText;
