import React, { PropTypes } from 'react';
// import { List } from 'immutable';

const UserContact = ({ userContact }) => {
  console.log(userContact);
  return (
    <div>
      <span className="userContactText">{ userContact }</span>
    </div>
  );
};

UserContact.PropTypes = {
  userContact: PropTypes.string
};

export default UserContact;
