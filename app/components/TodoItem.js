import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { removeTodoItem } from '../actions/todosAction';
// import { editTodoItem } from '../actions/todosAction';
import { toggleTodoStatus } from '../actions/todosAction';
import Checkbox from 'material-ui/Checkbox';
// import TextField from 'material-ui/TextField';

export class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };
  }
  render() {
    return (
      <li className="todo-list__item">
        <div className="todo-item__checkbox">
          <Checkbox
            aria-label="Checkbox"
            checked={ this.props.todoItem.completed }
            onClick={ () => {
              this.props.dispatch(
                toggleTodoStatus(this.props.index, this.props.todoItem._id));
            }}/>
        </div>
        <span className="todo-list__text">
          <span id="todo">
            { this.props.todoItem.text }  &nbsp;&nbsp;
          </span>
          <a onClick={ () => {
            this.props.dispatch(removeTodoItem(this.props.index, this.props.todoItem._id));
          }}>
            <i className="material-icons material-icons__delete" aria-label="Delete">
              delete_forever
            </i>
          </a>
          <a onClick={ () => {
            // const editedTodo = prompt('Edit Todo Item Below:');
            // this.props.dispatch(editTodoItem(this.props.index,
            // this.props.todoItem._id, this.props.editedTodo));
          }}>
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
  todoItem: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect()(TodoItem);
