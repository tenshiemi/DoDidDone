import React from 'react';
import BioContainer from '../components/About/BioContainer.js';
import { List } from 'immutable';

const userData = List([
  { userBio: 'Olivia Overscheduled',
   userImageURL: 'http://i.imgur.com/RYBQAKA.jpg',
   userContact: '(415) 864-8840' },
  { userBio: 'Tia Tudeux',
   userImageURL: 'http://i.imgur.com/VS8ujlb.jpg',
   userContact: '(415) 795-4022' }
]);

export const About = () => {
  return (
    <div>
      <h1>About the Team</h1>
      <BioContainer userData={userData} />
    </div>
  );
};

export default About;
