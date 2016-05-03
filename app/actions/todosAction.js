export const RECEIVE_TODO_ITEMS = 'RECEIVE_TODO_ITEMS';
export const EDIT_TODO_ITEM = 'EDIT_TODO_ITEM';

export function receiveTodoItems(todoItems) {
  return {
    type: RECEIVE_TODO_ITEMS,
    todoItems
  };
}

export function fetchTodoItems() {
  return function(dispatch) {
    fetch('/todos', { method: 'GET' }).then(function(response) {
      return response.json();
    }).then(function(response) {
      dispatch(receiveTodoItems(response.todos));
    }).catch(function(error) {
      console.log('request failed', error);
    });
  };
}

export function addTodoItem(text) {
  return function(dispatch) {
    fetch('/todo', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text })
    }).then(function(response) {
      return response.json();
    }).then(function(responseJSON) {
      dispatch(receiveTodoItems(responseJSON.todos));
    }).catch(function(error) {
      console.log('request failed', error);
    });
  };
}

export function removeTodoItem(index) {
  return function(dispatch) {
    fetch('/todo', {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ index })
    }).then(function(response) {
      return response.json();
    }).then(function(responseJSON) {
      dispatch(receiveTodoItems(responseJSON.todos));
    }).catch(function(error) {
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
    }).then(function(response) {
      console.log(response, 'response');
      return response.json();
    }).then(function(responseJSON) {
      console.log(responseJSON, 'responseJSON');
      console.log(responseJSON.todos, 'todos');
      dispatch(receiveTodoItems(responseJSON.todos));
    }).catch(function(error) {
      console.log('request failed', error);
    });
  };
}

export function editTodoItem(index, text) {
  return function(dispatch) {
    fetch('/todo', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ index, text })
    }).then(function(response) {
      return response.json();
    }).then(function(responseJSON) {
      dispatch(receiveTodoItems(responseJSON.todos));
    }).catch(function(error) {
      console.log('request failed', error);
    });
  };
}
