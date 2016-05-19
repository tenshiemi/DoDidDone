import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
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
      <Route path="start" component={LandingPageContainer} />
      <Route path="/" component={TodoListContainer} />
      <Route path="about" component={About} />
      <Route path="help" component={Help}>
        <IndexRedirect to="faqs" />
        <Route path="faqs" component={FAQs} />
        <Route path="contact" component={ContactTab} />
      </Route>
    </Route>
  </Router>
);
