import React, { Component } from 'react';
import LandingPageHeader from '../components/LandingPage/LPHeaderContainer';
import HorizontalContainer from '../components/LandingPage/LPHorizontalContainer';
import { List } from 'immutable';

export class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const heroUrlSource = 'https://static.pexels.com/photos/6471/woman-hand-smartphone-desk.jpg';
    const horizontalContent = List([
      { text: 'Horizontal Text Content',
       image: 'http://hcha.org.uk/wp-content/uploads/2014/02/placeholder.jpg'
      },
      { text: 'Horizontal Text Content',
       image: 'http://hcha.org.uk/wp-content/uploads/2014/02/placeholder.jpg'
      },
      { text: 'Horizontal Text Content',
       image: 'http://hcha.org.uk/wp-content/uploads/2014/02/placeholder.jpg'
      },
    ]);

    return (
      <div className="landing-page">
        <LandingPageHeader heroSource={heroUrlSource} />
        <HorizontalContainer horizontalContent={horizontalContent} />
      </div>
    );
  }
}

export default LandingPage;
