import React, { PropTypes } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const App = (props) => (
  <div>
    <Nav />
    { props.children }
    <Footer />
  </div>
);

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;

