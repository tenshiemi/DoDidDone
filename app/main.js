import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import router from './router';
import todos from './reducers/appReducers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
require('../styles/custom.scss');

const store = createStore(todos);

render(
  <Provider store={ store }>
    <MuiThemeProvider muiTheme={ getMuiTheme(lightBaseTheme) }>
      { router }
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
