import React from 'react';
import Nav from '../components/Nav';
import TodoListApp from '../components/TodoList';
import Footer from '../components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Nav />
        <TodoListApp />
        <Footer />
      </div>
    );
  }
}

export default App;

