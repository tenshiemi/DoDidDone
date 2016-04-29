export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const RECEIVE_TODO_ITEMS = 'RECEIVE_TODO_ITEMS';

export function addTodo(text) {
  return { type: ADD_TODO, text };
}

export function removeTodo(index) {
  return { type: REMOVE_TODO, index };
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index };
}

export function receiveTodoItems(todoItems) {
  return {
    type: RECEIVE_TODO_ITEMS,
    todoItems
  };
}

export function fetchTodoItems() {
  return function(dispatch) {
    fetch('/todos', { method: 'get' }).then(function(response) {
      return response.json();
    }).then(function(response) {
      dispatch(receiveTodoItems(response.todos));
    });
  };
}
