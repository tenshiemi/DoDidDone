import { List, Map } from 'immutable';

const initialData = [
  { text: 'Do this first', completed: true },
  { text: 'Then do that', completed: false }
];

const todos = (state = Map({ todoItems: List(initialData) }), action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      if (!action.text) {
        return state;
      }
      return state.set('todoItems', state.get('todoItems').push(
        { text: action.text, completed: false }
      ));
    }
    case 'REMOVE_TODO': {
      return state.set('todoItems', state.get('todoItems').delete(action.index));
    }
    case 'TOGGLE_TODO': {
      const newTodoList = state.todoItems.update(action.index, (todoItem) => {
        return {
          ...todoItem,
          completed: !todoItem.completed
        };
      });

      return {
        ...state,
        todoItems: newTodoList
      };
    }
    default: {
      return state;
    }
  }
};

export default todos;
