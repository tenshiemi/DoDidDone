import React, { PropTypes } from 'react';

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
