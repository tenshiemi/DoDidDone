const todos = (state = { todoItems: ['first item'] }, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return {
        ...state,
        todoItems: [...state.todoItems, action.text]
      };
    }
    default: {
      return state;
    }
  }
};

export default todos;
