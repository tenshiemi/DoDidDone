import React, { PropTypes } from 'react';

const UserContact = ({ userContact }) => {
  return (
    <div>
      <span className="userContactText">{userContact}</span>
    </div>
  );
};

UserContact.propTypes = {
  userContact: PropTypes.string
};

export default UserContact;
