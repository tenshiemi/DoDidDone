import React, { PropTypes } from 'react';

export const VerticalContent = ({ imageContent, textContent }) => {
  return (
    <div>
      <div className="landing-page__vertical-img-container">
        <img className="landing-page__vertical-img" src={imageContent} />
      </div>
      <div className="landing-page__vertical-text">
        {textContent}
      </div>
    </div>
  );
};

VerticalContent.propTypes = {
  imageContent: PropTypes.string,
  textContent: PropTypes.string
};

export default VerticalContent;
