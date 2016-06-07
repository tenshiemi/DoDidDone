import React, { PropTypes } from 'react';
import TodoText from './TodoText';
import TodoToggle from './TodoToggle';

export class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };

    this.editingState = this.editingState.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
  }
  editingState() {
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
    return (
      <li className="todo-list__item">
        <TodoToggle
          checked={this.props.todoItem.completed}
          index={this.props.index}
          id={this.props.todoItem._id}
          onToggle={this.props.actions.toggleTodoStatus}
        />
        <TodoText
          editing={this.state.editing}
          text={this.props.todoItem.text}
          onSave={this.saveEdit}
          onCancel={this.cancelEdit}
        />
        <span>
          <a onClick={() => {
            this.props.actions.removeTodoItem(this.props.index, this.props.todoItem._id);
          }}
          >
            <i className="material-icons material-icons__delete" aria-label="Delete">
              delete_forever
            </i>
          </a>
          <a onClick={this.editingState}>
            <i className="material-icons material-icons__edit" aria-label="Delete">
              mode_edit
            </i>
          </a>
        </span>
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
