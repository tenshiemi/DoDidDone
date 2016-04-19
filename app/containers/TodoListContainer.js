import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';

class TodoListContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <TodoList todoItems={ this.props.todoItems } />
        <AddTodo />
      </div>
    );
  }
}

TodoListContainer.propTypes = {
  todoItems: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  const { todoItems } = state;

  return {
    todoItems
  };
};

export default connect(mapStateToProps)(TodoListContainer);
