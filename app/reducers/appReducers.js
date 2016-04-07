const todos = (state = { todoList: ['first item'] }, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return {
        ...state.todoList,
        todoList: [...state.todoList, action.text]
      };
    }
    default: {
      return state;
    }
  }
};

export default todos;
