import React from 'react';
import BioContainer from '../components/BioContainer.js';
import { List } from 'immutable';

const userData = List([
  { userBio: 'Olivia Overscheduled',
   userImageURL: 'http://i.imgur.com/RYBQAKA.jpg',
   userContact: '(415) 864-8840' },
  { userBio: 'Tia Tudeux',
   userImageURL: 'http://i.imgur.com/VS8ujlb.jpg',
   userContact: '(415) 795-4022' }
]);

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
			<div>
        <BioContainer userData={ userData } />
			</div>
		);
  }
}

export default About;
