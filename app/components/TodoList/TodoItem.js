import React, { PropTypes } from 'react';
import TodoActions from './TodoActions';
import TodoText from './TodoText';
import TodoToggle from './TodoToggle';

export class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };

    this.setEditingState = this.setEditingState.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
  }
  setEditingState() {
    this.setState({ editing: true });
  }
  saveEdit(editedText) {
    this.props.actions.editTodoItem(this.props.index, this.props.todoItem._id, editedText);
    this.setState({ editing: false });
  }
  cancelEdit() {
    this.setState({ editing: false });
  }
  render() {
    const { completed, _id, text } = this.props.todoItem;

    return (
      <li className="todo-list__item">
        <TodoToggle
          checked={completed}
          index={this.props.index}
          id={_id}
          onToggle={this.props.actions.toggleTodoStatus}
        />
        <TodoText
          editing={this.state.editing}
          text={text}
          onSave={this.saveEdit}
          onCancel={this.cancelEdit}
        />
        <TodoActions
          setEditingState={this.setEditingState}
          id={_id}
          index={this.props.index}
          removeTodo={this.props.actions.removeTodoItem}
        />
      </li>
    );
  }
}

TodoItem.propTypes = {
  actions: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  todoItem: PropTypes.object.isRequired
};

export default TodoItem;
