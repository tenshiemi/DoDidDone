import React from 'react';
import Nav from '../components/Nav';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Nav />
        <TodoList />
        <Footer />
      </div>
    );
  }
}

export default App;

