import { List, Map } from 'immutable';

const todos = (state = Map({ todoItems: List() }), action) => {
  switch (action.type) {
    case 'RECEIVE_TODO_ITEMS': {
      return state.set('todoItems', List(action.todoItems));
    }
    case 'TOGGLE_TODO': {
      const newTodoList = state.get('todoItems').update(action.index, (todoItem) => {
        return {
          ...todoItem,
          completed: !todoItem.completed
        };
      });
      return state.set('todoItems', newTodoList);
    }
    default: {
      return state;
    }
  }
};

export default todos;
