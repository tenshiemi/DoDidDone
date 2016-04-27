import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';
import Immutable from 'immutable';

class TodoListContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <TodoList todoItems={ this.props.todoItems } />
        <AddTodo />
      </div>
    );
  }
}

TodoListContainer.propTypes = {
  todoItems: PropTypes.instanceOf(Immutable.List)
};

const mapStateToProps = (state) => {
  return {
    todoItems: state.todos.get('todoItems')
  };
};

export default connect(mapStateToProps)(TodoListContainer);
