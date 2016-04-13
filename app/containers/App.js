import React from 'react';
import Nav from '../components/Nav';
import TodoListContainer from '../containers/TodoListContainer';
import Footer from '../components/Footer';

const App = () => (
  <div>
    <Nav />
    <TodoListContainer />
    <Footer />
  </div>
);


export default App;

