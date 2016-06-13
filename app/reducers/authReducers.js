import { Map } from 'immutable';

const auth = (state = Map({ user: null, token: null }), action) => {
  switch (action.type) {
    case 'SET_USER_AND_TOKEN': {
      const newState = state.withMutations(oldState => {
        oldState.set('user', action.user);
        oldState.set('token', action.token);
      });

      return newState;
    }
    case 'CLEAR_USER_INFO': {
      const newState = state.withMutations(oldState => {
        oldState.set('user', null);
        oldState.set('token', null);
      });

      return newState;
    }
    default: {
      return state;
    }
  }
};

export default auth;
