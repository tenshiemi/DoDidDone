import React, { PropTypes } from 'react';

const UserPicture = ({ userPicture }) => {
  return (
    <div>
      <span className="userPhoto" ><img src={userPicture} /></span>
    </div>
  );
};

UserPicture.propTypes = {
  userPicture: PropTypes.string
};

export default UserPicture;
