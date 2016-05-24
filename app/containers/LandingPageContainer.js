import React from 'react';
import HorizontalContainer from '../components/LandingPage/HorizontalContainer';
import VerticalContainer from '../components/LandingPage/VerticalContainer';
import Header from '../components/LandingPage/LandingPageHeader';
import { List } from 'immutable';

const verticalContent = List([
  { text: 'Vertical Text Content',
   image: 'http://goo.gl/T3xaaI'
  },
  { text: 'Vertical Text Content',
   image: 'http://goo.gl/T3xaaI'
  },
  { text: 'Vertical Text Content',
   image: 'http://goo.gl/T3xaaI'
  }
]);

const horizontalContent = List([
  { text: 'Horizontal Text Content',
   image: 'http://goo.gl/gpWQPB'
  },
  { text: 'Horizontal Text Content',
   image: 'http://goo.gl/gpWQPB'
  },
  { text: 'Horizontal Text Content',
   image: 'http://goo.gl/gpWQPB'
  }
]);

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <HorizontalContainer horizontalContent={horizontalContent} />
      <VerticalContainer verticalContent={verticalContent} />
    </div>
  );
};

export default LandingPage;
