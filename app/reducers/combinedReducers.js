import todos from './todosReducers';
import auth from './authReducers';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  todos,
  auth
});

export default rootReducer;
