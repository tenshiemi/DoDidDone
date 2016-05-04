export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const RECEIVE_TODO_ITEMS = 'RECEIVE_TODO_ITEMS';

export function addTodoToState(todoItem) {
  return { type: ADD_TODO, todoItem };
}

export function removeTodoFromState(index) {
  return { type: REMOVE_TODO, index };
}

export function updateTodoInState(todoItem, index) {
  return { type: TOGGLE_TODO, todoItem, index };
}

export function receiveTodoItems(todoItems) {
  return {
    type: RECEIVE_TODO_ITEMS,
    todoItems
  };
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  let error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseJSON(response) {
  return response.json();
}

function logError(error) {
  console.log('Request failed:', error);
}

export function fetchTodoItems() {
  return (dispatch) => {
    return fetch('/api/todos', { method: 'GET' })
      .then(checkStatus)
      .then(parseJSON)
      .then(json => dispatch(receiveTodoItems(json)))
      .catch(logError);
  };
}

export function addTodoItem(text) {
  return (dispatch) => {
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text })
    }).then(checkStatus)
    .then(parseJSON)
    .then(todo => dispatch(addTodoToState(todo)))
    .catch(logError);
  };
}

export function removeTodoItem(index, id) {
  return (dispatch) => {
    return fetch('/api/todos/' + id, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => dispatch(removeTodoFromState(index)))
    .catch(logError);
  };
}

export function toggleTodoStatus(index, id) {
  return (dispatch) => {
    return fetch('/api/todos/' + id, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(checkStatus)
    .then(parseJSON)
    .then(todo => dispatch(updateTodoInState(todo, index)))
    .catch(logError);
  };
}

export function editTodoItem(index, id, text) {
  return (dispatch) => {
    fetch('/api/todos/' + id, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ index, text })
    }).then(checkStatus)
    .then(parseJSON)
    .then((todo) => dispatch(updateTodoInState(todo, index)))
    .catch(logError);
  };
}
