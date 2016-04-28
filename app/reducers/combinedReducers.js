import todos from './todosReducers';
import todoList from './todoListReducers';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  todos,
  todoList
});

export default rootReducer;
