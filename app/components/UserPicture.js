import React from 'react';

const UserPicture = ({}) => (
	<div>
		<img src="../../public/busy300x300.jpg" />
	</div>
);

export default UserPicture;

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