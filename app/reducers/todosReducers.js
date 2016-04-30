import { List, Map } from 'immutable';

const todos = (state = Map({ todoItems: List() }), action) => {
  switch (action.type) {
    case 'RECEIVE_TODO_ITEMS': {
      return state.set('todoItems', List(action.todoItems));
    }
    default: {
      return state;
    }
  }
};

export default todos;
