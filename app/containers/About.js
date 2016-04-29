import React, { PropTypes } from 'react';
import BioContainer from '../components/BioContainer.js';
import Immutable, { List } from 'immutable';

const userData = [
  { userBio: 'Olivia Overscheduled',
   userImageURL: '../../public/busy300x300.jpg',
   userContact: '(415) 864-8840' },
  { userBio: 'Tia Tudeux',
   userImageURL: '../../public/tia300x300.jpg',
   userContact: '(415) 795-4022' }
];

class About extends React.Component {
  constructor(props) {
    super(props);
	}
  render() {
    return (
			<div>
				<BioContainer userData={ this.props.userData } />
			</div>
		);
	}
}

About.propTypes = {
  userData: PropTypes.instanceOf(Immutable.List)
};

export default About;
