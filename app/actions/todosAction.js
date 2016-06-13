import actionHelpers from './actionHelpers';
import { appendTokenToRequest } from './authHelpers';

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

export function fetchTodoItems() {
  return (dispatch) => {
    return fetch(appendTokenToRequest('/api/todos'), { method: 'GET' })
      .then(actionHelpers.checkStatus)
      .then(actionHelpers.parseJSON)
      .then(json => dispatch(receiveTodoItems(json)))
      .catch(actionHelpers.logError);
  };
}

export function addTodoItem(text) {
  const config = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text })
  };

  return (dispatch) => {
    return fetch(appendTokenToRequest('/api/todos'), config)
    .then(actionHelpers.checkStatus)
    .then(actionHelpers.parseJSON)
    .then(todo => dispatch(addTodoToState(todo)))
    .catch(actionHelpers.logError);
  };
}

export function removeTodoItem(index, id) {
  const config = {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };

  return (dispatch) => {
    return fetch(appendTokenToRequest('/api/todos/' + id), config)
    .then(() => dispatch(removeTodoFromState(index)))
    .catch(actionHelpers.logError);
  };
}

export function toggleTodoStatus(index, id) {
  const config = {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };

  return (dispatch) => {
    return fetch(appendTokenToRequest('/api/todos/' + id), config)
    .then(actionHelpers.checkStatus)
    .then(actionHelpers.parseJSON)
    .then(todo => dispatch(updateTodoInState(todo, index)))
    .catch(actionHelpers.logError);
  };
}

export function editTodoItem(index, id, text) {
  const config = {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ index, text })
  };

  return (dispatch) => {
    return fetch(appendTokenToRequest('/api/todos/' + id), config)
    .then(actionHelpers.checkStatus)
    .then(actionHelpers.parseJSON)
    .then((todo) => dispatch(updateTodoInState(todo, index)))
    .catch(actionHelpers.logError);
  };
}
