import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { removeTodoItem } from '../actions/todosAction';
// /import { editTodoItem } from '../actions/todosAction';
import { toggleTodoStatus } from '../actions/todosAction';
import Checkbox from 'material-ui/Checkbox';
import EditTodo from './EditTodo';

const TodoText = ({ text }) => (
  <span>{text}  &nbsp;&nbsp;</span>
);

TodoText.propTypes = {
  text: PropTypes.string.isRequired
};

export class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };

    this.editingState = this.editingState.bind(this);
  }
  editingState() {
    this.setState({ editing: true });
  }
  render() {
    return (
      <li className="todo-list__item">
        <div className="todo-item__checkbox">
          <Checkbox
            aria-label="Checkbox"
            checked={this.props.todoItem.completed}
            onClick={() => {
              this.props.dispatch(
                toggleTodoStatus(this.props.index, this.props.todoItem._id));
            }}
          />
        </div>
        <span className="todo-list__text">
            {this.state.editing === true ?
              (<EditTodo text={this.props.todoItem.text} />) :
              (<TodoText text={this.props.todoItem.text} />)
            }
          <a onClick={() => {
            this.props.dispatch(removeTodoItem(this.props.index, this.props.todoItem._id));
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
  todoItem: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect()(TodoItem);
