import React, { Component } from 'react';
import HeaderContainer from '../components/LandingPage/HeaderContainer';
import HorizontalContainer from '../components/LandingPage/HorizontalContainer';
import VerticalContainer from '../components/LandingPage/VerticalContainer';
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
      }
    ]);
    const verticalContent = List([
      { text: 'Vertical Text Content',
       image: 'http://sellocarbon.com/wp-content/uploads/2016/05/placeholder-1.jpg'
      },
      { text: 'Vertical Text Content',
       image: 'http://sellocarbon.com/wp-content/uploads/2016/05/placeholder-1.jpg'
      },
      { text: 'Vertical Text Content',
       image: 'http://sellocarbon.com/wp-content/uploads/2016/05/placeholder-1.jpg'
      }
    ]);

    return (
      <div className="landing-page">
        <HeaderContainer heroSource={heroUrlSource} />
        <HorizontalContainer horizontalContent={horizontalContent} />
        <VerticalContainer verticalContent={verticalContent} />
      </div>
    );
  }
}

export default LandingPage;
