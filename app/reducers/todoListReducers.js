import { List, Map } from 'immutable';

const todos = (state = Map({}), action) => {
  switch (action.type) {
    case 'FETCH_TODOS': {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default todos;
