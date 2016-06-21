import actionHelpers from './actionHelpers';

export const SET_USER_AND_TOKEN = 'SET_USER_AND_TOKEN';
export const CLEAR_USER_INFO = 'CLEAR_USER_INFO';

export function setUserAndToken(userInfo) {
  return { type: SET_USER_AND_TOKEN, user: userInfo.email, token: userInfo.token };
}

export function clearUserInfo() {
  return { type: CLEAR_USER_INFO };
}

export function logOutUser() {
  return (dispatch) => {
    localStorage.removeItem('id_token');
    dispatch(clearUserInfo());
  };
}

export function signUpUser(newUser) {
  const config = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  };

  return (dispatch) => {
    fetch('/api/signup', config)
    .then(actionHelpers.checkStatus)
    .then(actionHelpers.parseJSON)
    .then(actionHelpers.checkSuccess)
    .then((userInfo) => dispatch(setUserAndToken(userInfo)))
    .catch(actionHelpers.logError);
  };
}

export function logInUser(userCredentials) {
  return (dispatch) => {
    const config = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userCredentials)
    };

    fetch('/api/authenticate', config)
    .then(actionHelpers.checkStatus)
    .then(actionHelpers.parseJSON)
    .then(actionHelpers.checkSuccess)
    .then((userInfo) => {
      localStorage.setItem('id_token', userInfo.token);
      dispatch(setUserAndToken(userInfo));
    })
    .catch(actionHelpers.logError);
  };
}
