import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { logOutUser } from '../actions/authAction';

export default function redirectLoggedIn(Component) {
  class ComponentWithRedirect extends React.Component {
    componentWillMount() {
      this.props.dispatch(logOutUser());
    }
    render() {
      return (
        <Component {...this.props} />
      );
    }
  }

  ComponentWithRedirect.propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  return connect()(ComponentWithRedirect);
}
