const todos = (state = { todoItems: ['first item'] }, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      if (!action.text) {
        return state;
      }

      return {
        ...state,
        todoItems: [...state.todoItems, action.text]
      };
    }
    case 'REMOVE_TODO': {
      return {
        ...state,
        todoItems: [
          ...state.todoItems.slice(0, action.index),
          ...state.todoItems.slice(action.index + 1)
        ]
      };
    }
    case 'TOGGLE_TODO': {
      return {
        ...state,
        todoItems: [
          ...state.todoItems.slice(0, action.index),
          state.todoItems[action.index],
          ...state.todoItems.slice(action.index + 1)
        ]
      };
    }
    default: {
      return state;
    }
  }
};

export default todos;
