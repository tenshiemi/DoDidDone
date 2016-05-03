import React from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';

class LandingPageContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="landing-page">
        <span className="landing-page__login">
          <Login />
        </span>
        <span className="landing-page__signup">
          <Signup />
        </span>
      </div>
    );
  }
}

export default LandingPageContainer;
