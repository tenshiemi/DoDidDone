import React, { PropTypes } from 'react';
import { List } from 'immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'isomorphic-fetch';
import * as TodoActions from '../actions/todosAction';
import TodoList from '../components/TodoList/TodoList';
import AddTodo from '../components/TodoList/AddTodo';

class TodoListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.props.actions.fetchTodoItems();
  }
  render() {
    const { todoItems, actions } = this.props;

    return (
      <div>
        <TodoList todoItems={todoItems} actions={actions}/>
        <AddTodo onSubmit={actions.addTodoItem} />
      </div>
    );
  }
}

TodoListContainer.propTypes = {
  todoItems: PropTypes.instanceOf(List),
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    todoItems: state.todos.get('todoItems')
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListContainer);
