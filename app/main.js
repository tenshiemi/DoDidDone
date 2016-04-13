import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import todos from './reducers/appReducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
require('../styles/custom.scss');

const store = createStore(todos);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('app')
);

