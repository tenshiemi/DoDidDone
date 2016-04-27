import React, { PropTypes } from 'react';
import BioContainer from '../components/BioContainer.js';

const About = (props) => (
	<div>
		<BioContainer />
		{ props.children }
	</div>
);

About.propTypes = {
	children: PropTypes.object.isRequired
};

export default About;
