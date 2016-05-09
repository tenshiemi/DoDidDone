import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import router from './router';
import rootReducer from './reducers/combinedReducers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import { cyan800, amberA700 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
require('../styles/custom.scss');

const store = createStore(rootReducer, applyMiddleware(thunk));

render(
  <Provider store={ store }>
    <MuiThemeProvider muiTheme={ getMuiTheme(lightBaseTheme) }>
      { router }
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
