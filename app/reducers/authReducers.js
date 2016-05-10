import { Map } from 'immutable';

const auth = (state = Map({}), action) => {
  console.log(state);
  switch (action.type) {
    case 'SET_USER_AND_TOKEN': {
      return state.withMutations(oldState => {
        oldState.set('user', action.user);
        oldState.set('token', action.token);
      });
    }
    default: {
      return state;
    }
  }
};

export default auth;
