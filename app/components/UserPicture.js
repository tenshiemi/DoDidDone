import React, { PropTypes } from 'react';

const UserPicture = ({ userPicture }) => {
  console.log(userPicture);
  return (
    <div>
      <span className="userPhoto" ><img src={ userPicture } /></span>
    </div>
  );
};

UserPicture.PropTypes = {
  userPicture: PropTypes.string
};

export default UserPicture;
