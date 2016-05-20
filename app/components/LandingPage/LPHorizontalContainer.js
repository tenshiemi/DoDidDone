import React from 'react';
import HorizontalImageContent from './HorizontalImageContent';
import HorizontalTextContent from './HorizontalTextContent';

export const LandingPageHorizontalContainer = ({ horizontalContent }) => {
  return (
    <div className="landing-page__horizontal-container">
      {horizontalContent.map((pageContent, index) =>
        <span className="landing-page__horizontal-content" key={index}>
          <HorizontalImageContent key={index} imageContent={pageContent.image} />
          <HorizontalTextContent key={index} textContent={pageContent.text} />
          <br/><br/> <br/>
        </span>
      )}
    </div>
  );
};

export default LandingPageHorizontalContainer;
