import React from 'react';
import HorizontalContainer from '../components/LandingPage/HorizontalContainer';
import VerticalContainer from '../components/LandingPage/VerticalContainer';
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
