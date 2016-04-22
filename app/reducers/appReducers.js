import { List } from 'immutable';

const sampleData = [
  { text: '1', completed: true },
  { text: '2', completed: false }
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
        todoItems: state.todoItems.push({ text: action.text, completed: false })
      //  IF WE REMOVE THE spread (...state), the state seems to stil be correctly updated...WHY?
      //  pushing the new add_todo object to the existing array state.todoItems
      };
    }
    case 'REMOVE_TODO': {
      return {
        ...state,
        todoItems: state.todoItems.delete(action.index) };
    }
      //  REMOVING this  ,...state.todoItems.slice(action.index + 1)
      //  from the REMOVE_TODO array doesn't break the code. why?
      //  ALSO there is a bug, if you remove all the items from the
      //  to do list you end up not being able to add new ones
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
