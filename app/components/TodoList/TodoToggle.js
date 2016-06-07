import React, { PropTypes } from 'react';
import Checkbox from 'material-ui/Checkbox';

export const TodoToggle = ({ checked, index, id, onToggle }) => (
  <div className="todo-item__checkbox">
    <Checkbox
      aria-label="Checkbox"
      checked={checked}
      onClick={() => {
        onToggle(index, id);
      }}
    />
  </div>
);

TodoToggle.propTypes = {
  checked: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onToggle: PropTypes.func.isRequired
};

export default TodoToggle;
