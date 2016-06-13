import React, { PropTypes } from 'react';

const UserBio = ({ userBio }) => {
  return (
    <div>
      <span className="userBioText">{userBio}</span>
    </div>
  );
};

UserBio.propTypes = {
  userBio: PropTypes.string
};

export default UserBio;
