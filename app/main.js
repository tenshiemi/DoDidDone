import React from 'react';
import { render } from 'react-dom';
import todos from './reducers/appReducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import router from './router';
require('../styles/custom.scss');

const store = createStore(todos);

render(
  <Provider store={ store }>{ router }</Provider>,
  document.getElementById('app')
);
