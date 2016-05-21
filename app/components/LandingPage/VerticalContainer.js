import React, { PropTypes } from 'react';
import VerticalContent from './VerticalContent';
import { List } from 'immutable';

export const VerticalContainer = ({ verticalContent }) => {
  return (
    <div>
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
    </div>
  );
};

VerticalContainer.propTypes = {
  verticalContent: PropTypes.instanceOf(List)
};

export default VerticalContainer;
