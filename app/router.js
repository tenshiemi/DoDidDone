import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from './containers/App';
import TodoListContainer from './containers/TodoListContainer';
import About from './containers/About';
import Help from './containers/Help';

export default (
  <Router history={ browserHistory }>
    <Route component={ App }>
      <Route path="/" component={ TodoListContainer } />
      <Route path="about" component={ About } />
      <Route path="help" component={ Help } />
    </Route>
  </Router>
);
