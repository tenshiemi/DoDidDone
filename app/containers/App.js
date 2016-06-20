import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { validateToken } from '../actions/authAction';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);

    if (localStorage.getItem('id_token')) {
      this.props.dispatch(validateToken());
    }
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="app-container">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect()(App);
