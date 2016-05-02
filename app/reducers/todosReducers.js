import { List, Map } from 'immutable';

const todos = (state = Map({ todoItems: List() }), action) => {
  switch (action.type) {
    case 'RECEIVE_TODO_ITEMS': {
      return state.set('todoItems', List(action.todoItems));
    }
    case 'ADD_TODO': {
      return state.set('todoItems', state.get('todoItems').push(action.todoItem));
    }
    case 'REMOVE_TODO': {
      return state.set('todoItems', state.get('todoItems').delete(action.index));
    }
    case 'TOGGLE_TODO': {
      const newTodoList = state.get('todoItems').update(action.index, () => {
        return action.todoItem;
      });
      return state.set('todoItems', newTodoList);
    }
    default: {
      return state;
    }
  }
};

export default todos;
