import React, { PropTypes } from 'react';
import Immutable, { List } from 'immutable';

const UserBio = ({ userBio }) => (
	<div>
    { userBio.map((userBio) =>
      <span className="userBioText">{ userBio.text }</span>
      )}
	</div>
);

UserBio.PropTypes = {
  userBio: PropTypes.instanceOf(Immutable.List)
};

export default UserBio;
