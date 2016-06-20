import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import redirectLoggedIn from './utils/redirectLoggedIn';
import requireAuth from './utils/requireAuth';
import App from './containers/App';
import TodoListContainer from './containers/TodoListContainer';
import LandingPageContainer from './containers/LandingPageContainer';
import About from './containers/About';
import Help from './containers/Help';
import FAQs from './components/FAQs';
import ContactTab from './components/ContactTab';

export default (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={redirectLoggedIn(LandingPageContainer)} />
      <Route path="index" component={requireAuth(TodoListContainer)} />
      <Route path="about" component={About} />
      <Route path="help" component={Help}>
        <IndexRedirect to="faqs" />
        <Route path="faqs" component={FAQs} />
        <Route path="contact" component={ContactTab} />
      </Route>
    </Route>
  </Router>
);
