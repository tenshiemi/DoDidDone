import React, { PropTypes } from 'react';
import { List } from 'immutable';
import VerticalContent from './VerticalContent';

export const VerticalContainer = ({ verticalContent }) => {
  return (
    <div className="landing-page__vertical-container">
      {verticalContent.map((pageContent, index) =>
        <div className="landing-page__vertical-content" key={index}>
          <VerticalContent
            key={index}
            imageContent={pageContent.image}
            textContent={pageContent.text}
          />
        </div>
      )}
    </div>
  );
};

VerticalContainer.propTypes = {
  verticalContent: PropTypes.instanceOf(List)
};

export default VerticalContainer;
