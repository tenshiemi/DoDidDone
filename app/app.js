import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import TodoListApp from './components/TodoList';
import todos from './reducers/appReducers';
import Footer from './components/Footer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
require('../styles/custom.scss');

const store = createStore(todos);

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Nav />
        <Provider store={ store }>
          <TodoListApp />
        </Provider>
        <Footer />
      </div>
    );
  }
}

const render = () => {
  ReactDOM.render(<App store={store} />, document.getElementById('app'));
};

store.subscribe(render);

render();
