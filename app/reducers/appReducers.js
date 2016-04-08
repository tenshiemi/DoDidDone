const todos = (state = { todoList: ['first item'] }, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      console.log(state);
      return {
        ...state,
        todoList: [...state.todoList, action.text]
      };
    }
    default: {
      return state;
    }
  }
};

export default todos;
