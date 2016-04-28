import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import 'isomorphic-fetch';
import Immutable from 'immutable';
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';

class TodoListContainer extends React.Component {
  constructor(props) {
    super(props);

    fetch('/tasks', { method: 'get' }).then(function(response) {
      return response.json();
    }).then(function(response) {
      console.log(response);
    });
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
