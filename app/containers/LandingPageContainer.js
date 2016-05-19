import React, { Component } from 'react';
import LandingPageHeader from '../components//LandingPage/LandingPageHeader';
// import { List } from 'immutable';

// const horizontalContent = List([
//   { text: 'Ferris Quotes',
//    image: 'http://careersinmining.com/blog/wp-content/uploads/2012/10/being-productive-quote.jpg'
//   },
//   { text: 'Getting Stuff Done',
//    image: 'http://www.medicalmanage.gr/images/article_images_gr/time-header2.jpg'
//   }
// ]);

export class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const heroUrlSource = 'https://static.pexels.com/photos/6471/woman-hand-smartphone-desk.jpg';

    return (
      <div className="landing-page">
        <LandingPageHeader heroSource={heroUrlSource} />
      </div>
    );
  }
}

export default LandingPage;
