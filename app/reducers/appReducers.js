import { List } from 'immutable';

const sampleData = [
  { text: 'checked item', completed: true },
  { text: 'unchecked item', completed: false }
];

let immutableSampleData = List(sampleData);

const todos = (state = { todoItems: immutableSampleData }, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      if (!action.text) {
        return state;
      }
      return {
        ...state,
        //pushing the new add_todo object to the existing array state.todoItems
        todoItems: state.todoItems.push({ text: action.text, completed: false })
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
