import React from 'react';
import HorizontalContainer from '../components/LandingPage/HorizontalContainer';
import Header from '../components/LandingPage/LandingPageHeader';
import { List } from 'immutable';

const horizontalContent = List([
  { text: 'Horizontal Text Content',
   image: 'http://hcha.org.uk/wp-content/uploads/2014/02/placeholder.jpg'
  },
  { text: 'Horizontal Text Content',
   image: 'http://hcha.org.uk/wp-content/uploads/2014/02/placeholder.jpg'
  },
  { text: 'Horizontal Text Content',
   image: 'http://hcha.org.uk/wp-content/uploads/2014/02/placeholder.jpg'
  }
]);

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <HorizontalContainer horizontalContent={horizontalContent} />
    </div>
  );
};

export default LandingPage;
