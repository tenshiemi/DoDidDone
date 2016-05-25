import { Map } from 'immutable';

const auth = (state = Map({ user: null, token: null }), action) => {
  switch (action.type) {
    case 'SET_USER_AND_TOKEN': {
      return state.withMutations(oldState => {
        oldState.set('user', action.user);
        oldState.set('token', action.token);
      });
    }
    case 'CLEAR_USER_INFO': {
      return state.withMutations(oldState => {
        oldState.set('user', null);
        oldState.set('token', null);
      });
    }
    default: {
      return state;
    }
  }
};

export default auth;
