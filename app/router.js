import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from './containers/App';
import TodoListContainer from './containers/TodoListContainer';
import Greeting from './components/Greeting';

export default (
  <Router history={browserHistory}>
    <Route component={ App }>
      <Route path="/" component={ TodoListContainer } />
        <Route path="about" component={ Greeting } />
    </Route>
  </Router>
);
