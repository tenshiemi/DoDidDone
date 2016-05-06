import React, { PropTypes } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const App = (props) => (
  <div>
    <Nav />
    <div className="app-container">
      { props.children }
    </div>
    <Footer />
  </div>
);

App.propTypes = {
  children: PropTypes.array.isRequired
};

export default App;
