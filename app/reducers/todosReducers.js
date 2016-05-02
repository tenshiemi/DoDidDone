import { List, Map } from 'immutable';
import EDIT_TODO_ITEM from '../actions/todosAction';


const todos = (state = Map({ todoItems: List() }), action) => {
  switch (action.type) {
    case 'RECEIVE_TODO_ITEMS': {
      return state.set('todoItems', List(action.todoItems));
    }
    case 'EDIT_TODO_ITEM': {
      console.log(action.text);
      const editedTodoItem = state.get('todoItems').update(action.index, (text) => {
        return {
          ...todoItem,
          text
        };
      });
      return state.set('todoItems', editedTodoItem);
    }
    default: {
      return state;
    }
  }
};

export default todos;
