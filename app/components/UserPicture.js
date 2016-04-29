import React, { PropTypes } from 'react';
import Immutable, { List } from 'immutable';

const UserPicture = ({ userImageURL }) => (
	<div>
    { userImageURL.map((userImageURL) =>
      <span className="userPhoto"><img src={ userImageURL } /></span>
    )}
	</div>
);

UserPicture.PropTypes = {
  userImageURL: PropTypes.instanceOf(Immutable.List)
};

export default UserPicture;
