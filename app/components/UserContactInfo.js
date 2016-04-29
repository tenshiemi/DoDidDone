import React, { PropTypes } from 'react';
import Immutable, { List } from 'immutable';

const UserContact = ({ userContact }) => (
	<div>
		{ userContact.map((userContact) =>
      <span className="userContactText">{ userContact.text }</span>
      )}
	</div>
);

UserContact.PropTypes = {
  userContact: PropTypes.instanceOf(Immutable.List)
};

export default UserContact;
