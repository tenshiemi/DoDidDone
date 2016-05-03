import React from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';

export default class LandingPageContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Login/>
        <Signup />
      </div>
    );
  }
}

export default LandingPageContainer;
