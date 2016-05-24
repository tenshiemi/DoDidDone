import React, { PropTypes } from 'react';

export const VerticalContent = ({ imageContent, textContent }) => {
  return (
    <div>
      <span className="landing-page__vertical-container">
        <img className="landing-page__vertical-img" src={imageContent} />
      </span>
      <span className="landing-page__vertical-text">
        {textContent}
      </span>
    </div>
  );
};

VerticalContent.propTypes = {
  imageContent: PropTypes.string,
  textContent: PropTypes.string
};

export default VerticalContent;
