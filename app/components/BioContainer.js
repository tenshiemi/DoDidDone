import React, { PropTypes } from 'react';
// import userData from '../containers/About.js';
import UserBio from './UserBio.js';
import UserPicture from './UserPicture.js';
import UserContactInfo from './UserContactInfo.js';
import Immutable, { List } from 'immutable';

const BioContainer = ({ userData }) => (
  <div>
    { userData.map((userName, userImageURL, userContact) =>
      <div>
        <UserPicture userPicture={ this.props.userImageURL } />
        <UserBio userBio={ this.props.userBio } />
        <UserContactInfo userContact={ this.props.userContact } />
      </div>
    )}
  </div>
);

BioContainer.PropTypes = {
  userData: PropTypes.instanceOf(Immutable.List)
};

export default BioContainer;
