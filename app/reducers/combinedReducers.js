import todos from './TodoReducers';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  todos
});

export default rootReducer;
