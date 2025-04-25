import { store } from '../../../../store.jsx';

export const UserPersonalInfo = () => {
	const { name, age } = store.getState();
	const onUserUpdate = () => {
		const { name, email, phone } = store.getState();
		const newUserData = { name, age: 30, email, phone };
		store.dispatch({ type: 'SET_USER_DATA', payload: newUserData });
	};
	const onUserAgeDecrease = () => {
		store.dispatch({ type: 'SET_USER_AGE', payload: 15 });
	};

	return (
		<div>
			<h3>Personal Info:</h3>
			<div>Name:{name}</div>
			<div>Age:{age}</div>
			<button onClick={onUserUpdate}>Update User</button>
			<button onClick={onUserAgeDecrease}>Decrease User Age</button>
		</div>
	);
};
