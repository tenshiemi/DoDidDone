export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const RECEIVE_TODO_ITEMS = 'RECEIVE_TODO_ITEMS';

export function addTodoToState(todoItem) {
  return { type: ADD_TODO, todoItem };
}

export function removeTodo(index, todoItemId) {
  return { type: REMOVE_TODO, index, todoItemId };
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index };
}

export function receiveTodoItems(todoItems) {
  console.log(todoItems);
  return {
    type: RECEIVE_TODO_ITEMS,
    todoItems
  };
}

export function fetchTodoItems() {
  return (dispatch) => {
    fetch('/todos', { method: 'GET' }).then((response) => {
      return response.json();
    }).then(function(response) {
      dispatch(receiveTodoItems(response));
    }).catch(function(error) {
      console.log('request failed', error);
    });
  };
}

export function addTodoItem(text) {
  return (dispatch) => {
    fetch('/todo', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text })
    }).then(function(response) {
      console.log(response);
      return response.json();
    }).then((responseJSON) => {
      dispatch(receiveTodoItems(responseJSON.todos));
    }).catch((error) => {
      console.log('request failed', error);
    });
  };
}

export function removeTodoItem(index) {
  return (dispatch) => {
    fetch('/todo', {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ index })
    }).then((response) => {
      return response.json();
    }).then((responseJSON) => {
      dispatch(receiveTodoItems(responseJSON.todos));
    }).catch((error) => {
      console.log('request failed', error);
    });
  };
}

export function toggleTodoStatus(index) {
  return function(dispatch) {
    fetch('/todo', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ index })
    }).then((response) => {
      return response.json();
    }).then((responseJSON) =>{
      dispatch(receiveTodoItems(responseJSON.todos));
    }).catch((error) => {
      console.log('request failed', error);
    });
  };
}

export function editTodoItem(index, text) {
  return (dispatch) => {
    fetch('/todo', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ index, text })
    }).then((response) => {
      return response.json();
    }).then(function(responseJSON) {
      dispatch(addTodoToState(responseJSON));
    }).catch(function(error) {
      console.log('request failed', error);
    });
  };
}
