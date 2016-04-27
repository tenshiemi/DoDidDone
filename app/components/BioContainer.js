import React, { PropTypes } from 'react';
import userData from '../reducers/appReducers.js';
import UserPicture from './UserPicture.js';
import UserBio from './UserBio.js';
import UserContactInfo from './UserContactInfo.js';

// const userData = [
//   {userName: "Olivia Overscheduled", userImageURL: "../../public/busy300x300.jpg", userContact: "(415) 864-8840"},
//   {userName: "Tia Tudeux", userImageURL: "../../public/tia300x300.jpg", userContact: "(415) 795-4022"}
// ];

const BioContainer = ({ userData }) => (
	<div>
		{ userData.map((userBio, userImageURL, userContact) =>
			<UserPicture userPicture={ this.props.userImageURL } />
			<UserBio userBio={ this.props.userName } />
			<UserContactInfo userContactInfo={ this.props.userContact } />
		)}
	</div>
);

BioContainer.PropTypes = {

};

export default BioContainer;


// const TodoList = ({ todoItems }) => (
//   <ul className="todo-list">
//     { todoItems.map((todoItem, index) =>
//       <TodoItem key={ index } todoItem={ todoItem } index={ index } />
//     )}
//   </ul>
// );

// TodoList.propTypes = {
//   todoItems: PropTypes.instanceOf(Immutable.List)
// };

// export default TodoList;