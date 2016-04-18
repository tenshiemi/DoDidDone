import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const App = (props) => (
  <div>
    <Nav />
    { props.children }
    <Footer />
  </div>
);

export default App;

