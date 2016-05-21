import React, { PropTypes } from 'react';
import VerticalContent from './VerticalContent';
import { List } from 'immutable';

export const VerticalContainer = ({ verticalContent }) => {
  return (
    <table>
      <tbody>
        <tr className="landing-page__vertical-container">
          {verticalContent.map((pageContent, index) =>
            <tr className="landing-page__vertical-content" key={index}>
              <VerticalContent
                key={index}
                imageContent={pageContent.image}
                textContent={pageContent.text}
              />
            </tr>
          )}
        </tr>
      </tbody>
    </table>
  );
};

VerticalContainer.propTypes = {
  verticalContent: PropTypes.instanceOf(List)
};

export default VerticalContainer;
