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

    this.toggleEditing = this.toggleEditing.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
  }
  toggleEditing() {
    this.setState({ editing: !this.state.editing });
  }
  saveEdit(editedText) {
    this.props.actions.editTodoItem(this.props.index, this.props.todoItem._id, editedText);
    this.toggleEditing();
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
          onCancel={this.toggleEditing}
        />
        <TodoActions
          toggleEditing={this.toggleEditing}
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
