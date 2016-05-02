import { List, Map } from 'immutable';
import EDIT_TODO_ITEM from '../actions/todosAction';


const todos = (state = Map({ todoItems: List() }), action) => {
  switch (action.type) {
    case 'RECEIVE_TODO_ITEMS': {
      return state.set('todoItems', List(action.todoItems));
    }
    case 'EDIT_TODO_ITEM': {
      console.log(state);
      return state;
    }
    default: {
      return state;
    }
  }
};

export default todos;
