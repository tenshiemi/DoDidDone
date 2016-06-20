import React, { PropTypes } from 'react';

export default function requiresAuth(Component) {
  class AuthenticatedComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authToken: localStorage.getItem('id_token')
      };
    }
    componentDidMount() {
      this.checkAndRedirect();
    }
    componentDidUpdate() {
      this.checkAndRedirect();
    }
    checkAndRedirect() {
      if (!this.state.authToken) {
        this.context.router.push('/start');
      }
    }
    render() {
      return (
        <div className="authenticated">
          {this.state.authToken ? <Component {...this.props} /> : null}
        </div>
      );
    }
  }

  AuthenticatedComponent.contextTypes = {
    router: PropTypes.object.isRequired
  };

  return AuthenticatedComponent;
}
