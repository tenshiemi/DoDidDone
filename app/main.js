import React from 'react';
import { render } from 'react-dom';
import todos from './reducers/appReducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import router from './router';
require('../styles/custom.scss');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const lightTheme = getMuiTheme(lightBaseTheme);

const store = createStore(todos);

render(
  <Provider store={ store }>
    <MuiThemeProvider muiTheme={lightTheme}>
      { router }
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
