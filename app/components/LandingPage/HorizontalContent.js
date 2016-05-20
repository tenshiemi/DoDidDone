import React, { PropTypes } from 'react';

export const HorizontalContent = ({ imageContent, textContent }) => {
  return (
    <div>
      <div className="landing-page__horizontal-img-container">
        <img className="landing-page__horizontal-img" src={imageContent} />
      </div>
      <div className="landing-page__horizontal-text">
        {textContent}
      </div>
    </div>
  );
};

HorizontalContent.propTypes = {
  imageContent: PropTypes.string,
  textContent: PropTypes.string
};

export default HorizontalContent;
