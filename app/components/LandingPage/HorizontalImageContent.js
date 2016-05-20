import React from 'react';

export const HorizontalImageContent = ({ imageContent }) => {
  return (
    <div className="landing-page__horizontal-img-container">
      <img className="landing-page__horizontal-img" src={imageContent} />
    </div>
  );
};

export default HorizontalImageContent;
