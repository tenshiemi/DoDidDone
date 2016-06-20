import React from 'react';
import { List } from 'immutable';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Header from '../components/LandingPage/LandingPageHeader';
import HorizontalContainer from '../components/LandingPage/HorizontalContainer';
import VerticalContainer from '../components/LandingPage/VerticalContainer';

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
    <div>
      <Nav />
      <div className="app-container landing-page">
        <Header />
        <HorizontalContainer horizontalContent={horizontalContent} />
        <VerticalContainer verticalContent={verticalContent} />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
