import React from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';
import AppBar from 'material-ui/AppBar';

class LandingPageContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <AppBar title="DoDoneDid" />
        <div className="landing-page">
          <div className="landing-page__login">
            <Login />
          </div>
          <div className="landing-page__signup">
            <Signup />
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPageContainer;
