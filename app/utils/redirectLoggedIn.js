import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export default function redirectLoggedIn(Component) {
  class ComponentWithRedirect extends React.Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      this.checkAndRedirect();
    }
    componentDidUpdate() {
      this.checkAndRedirect();
    }
    checkAndRedirect() {
      if (this.props.user) {
        this.context.router.push('/index');
      }
    }
    render() {
      return (
        <div>
          {!this.props.user ? <Component {...this.props} /> : null}
        </div>
      );
    }
  }

  ComponentWithRedirect.contextTypes = {
    router: PropTypes.object.isRequired
  };

  ComponentWithRedirect.propTypes = {
    user: PropTypes.string
  };

  const mapStateToProps = (state) => {
    return { user: state.auth.get('user') };
  };

  return connect(mapStateToProps)(ComponentWithRedirect);
}
