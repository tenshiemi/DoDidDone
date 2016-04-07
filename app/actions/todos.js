export const ADD_TODO = 'ADD_TODO';

export function addToDo(text) {
  return { type: ADD_TODO, text };
}
