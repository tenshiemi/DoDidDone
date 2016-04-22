import { List } from 'immutable';

const sampleData = [
  { text: 'Do this first', completed: true },
  { text: 'Then do that', completed: false }
];

const todos = (state = { todoItems: List(sampleData) }, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      if (!action.text) {
        return state;
      }
      return {
        ...state,
        todoItems: state.todoItems.push({ text: action.text, completed: false })
      };
    }
    case 'REMOVE_TODO': {
      return {
        ...state,
        todoItems: state.todoItems.delete(action.index)
      };
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
        todoItems: newToDoList
      };
    }
    default: {
      return state;
    }
  }
};

export default todos;
