import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import NavMenu from '../components/NavMenu';

export class NavMenuContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.actions = {
      handleTouchTap: this.handleTouchTap.bind(this),
      handleRequestClose: this.handleRequestClose.bind(this)
    };
  }
  handleTouchTap(e) {
    e.preventDefault();

    this.setState({
      open: true,
      anchorEl: e.currentTarget
    });
  }
  handleRequestClose() {
    this.setState({
      open: false
    });
  }
  render() {
    return (
      <NavMenu actions={this.actions} state={this.state} />
    );
  }
}

NavMenuContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  token: PropTypes.string,
  user: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.get('token'),
    user: state.auth.get('user')
  };
};

export default connect(mapStateToProps)(NavMenuContainer);
