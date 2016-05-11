import actionHelpers from './actionHelpers';

export const SET_USER_AND_TOKEN = 'SET_USER_AND_TOKEN';
export const LOG_OUT_USER = 'LOG_OUT_USER';

export function setUserAndToken(userInfo) {
  return { type: SET_USER_AND_TOKEN, user: userInfo.email, token: userInfo.token };
}

export function logOutUser() {
  return { type: LOG_OUT_USER };
}

export function signUpUser(newUser) {
  return (dispatch) => {
    fetch('/api/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    }).then(actionHelpers.checkStatus)
    .then(actionHelpers.parseJSON)
    .then(actionHelpers.checkSuccess)
    .then((userInfo) => dispatch(setUserAndToken(userInfo)))
    .catch(actionHelpers.logError);
  };
}

export function logInUser(userCredentials) {
  return (dispatch) => {
    fetch('/api/authenticate', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userCredentials)
    }).then(actionHelpers.checkStatus)
    .then(actionHelpers.parseJSON)
    .then(actionHelpers.checkSuccess)
    .then((userInfo) => dispatch(setUserAndToken(userInfo)))
    .catch(actionHelpers.logError);
  };
}
