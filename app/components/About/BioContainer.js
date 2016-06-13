import React, { PropTypes } from 'react';
import UserBio from './UserBio.js';
import UserPicture from './UserPicture.js';
import UserContactInfo from './UserContactInfo.js';
import { List } from 'immutable';

const BioContainer = ({ userData }) => {
  return (
    <div>
     {userData.map((userDetail, index) =>
        <div key={index}>
          <UserPicture key={'picture' + index} userPicture={userDetail.userImageURL} />
          <UserBio key={'bio' + index} userBio={userDetail.userBio} />
          <UserContactInfo key={'info' + index} userContact={userDetail.userContact} />
        </div>
      )}
    </div>
  );
};

BioContainer.propTypes = {
  userData: PropTypes.instanceOf(List)
};

export default BioContainer;
