const sampleData = [
  { text: 'checked item', completed: true },
  { text: 'unchecked item', completed: false }
];

const todos = (state = { todoItems: sampleData }, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      if (!action.text) {
        return state;
      }

      return {
        ...state,
        todoItems: [...state.todoItems, { text: action.text, completed: false }]
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
      const newToDoState = {
        ...state.todoItems[action.index],
        completed: !state.todoItems[action.index].completed
      };

      return {
        ...state,
        todoItems: [
          ...state.todoItems.slice(0, action.index),
          newToDoState,
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
