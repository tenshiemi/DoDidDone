import React, { PropTypes } from 'react';
import { List } from 'immutable';
import HorizontalContent from './HorizontalContent';

export const HorizontalContainer = ({ horizontalContent }) => {
  return (
    <table>
      <tbody>
        <tr className="landing-page__horizontal-container">
          {horizontalContent.map((pageContent, index) =>
            <td className="landing-page__horizontal-content" key={index}>
              <HorizontalContent
                key={index}
                imageContent={pageContent.image}
                textContent={pageContent.text}
              />
            </td>
          )}
        </tr>
      </tbody>
    </table>
  );
};

HorizontalContainer.propTypes = {
  horizontalContent: PropTypes.instanceOf(List)
};

export default HorizontalContainer;
