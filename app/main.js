import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import router from './router';
import rootReducer from './reducers/combinedReducers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { muiTheme } from '../styles/muiTheme';

injectTapEventPlugin();
require('../styles/custom.scss');

const customThemes = getMuiTheme(muiTheme);

const store = createStore(rootReducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={customThemes}>
      {router}
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
