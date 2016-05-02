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
    fetch('/todos', { method: 'GET' }).then((response) => {
      return response.json();
    }).then((response) => {
      dispatch(receiveTodoItems(response));
    }).catch((error) =>{
      console.log('request failed', error);
    });
  };
}

export function addTodoItem(text) {
  return (dispatch) => {
    fetch('/todos', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text })
    }).then((response) => {
      return response.json();
    }).then((todo) => {
      dispatch(addTodoToState(todo));
    }).catch((error) => {
      console.log('request failed', error);
    });
  };
}

export function removeTodoItem(index, id) {
  return (dispatch) => {
    fetch('/todos/' + id, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      dispatch(removeTodoFromState(index));
    }).catch((error) => {
      console.log('request failed', error);
    });
  };
}

export function toggleTodoStatus(index, id) {
  return (dispatch) => {
    fetch('/todos/' + id, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }).then((response) => {
      return response.json();
    }).then((todo) => {
      dispatch(updateTodoInState(todo, index));
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
    }).then((todo) => {
      dispatch(updateTodoInState(todo, index));
    }).catch((error) => {
      console.log('request failed', error);
    });
  };
}
