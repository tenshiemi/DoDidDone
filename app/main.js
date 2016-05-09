import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import router from './router';
import rootReducer from './reducers/combinedReducers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { cyan800, amberA700 } from 'material-ui/styles/colors';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
require('../styles/custom.scss');

const store = createStore(rootReducer, applyMiddleware(thunk));

const muiTheme = getMuiTheme({
  palette: {
    textColor: amberA700,
  },
  appBar: {
    color: cyan800
  },
});

render(
  <Provider store={ store }>
    <MuiThemeProvider muiTheme={ muiTheme }>
      { router }
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
