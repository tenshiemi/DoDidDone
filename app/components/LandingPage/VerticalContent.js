import React, { PropTypes } from 'react';

export const VerticalContent = ({ imageContent, textContent }) => {
  return (
    <div className="landing-page__vertical-text-container">
      <p className="landing-page__vertical-text">{textContent}</p>
      <img className="landing-page__vertical-img" src={imageContent} />
    </div>
  );
};

VerticalContent.propTypes = {
  imageContent: PropTypes.string,
  textContent: PropTypes.string
};

export default VerticalContent;
