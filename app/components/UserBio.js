import React, { PropTypes } from 'react';

const UserBio = ({ userBio }) => {
  console.log(userBio);
  return (
    <div>
      <span className="userBioText">{ userBio }</span>
    </div>
  );
};

UserBio.PropTypes = {
  userBio: PropTypes.string
};

export default UserBio;
