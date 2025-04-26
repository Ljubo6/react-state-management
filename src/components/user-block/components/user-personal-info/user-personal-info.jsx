import { store } from '../../../../store.jsx';
import { useEffect, useState } from 'react';

export const UserPersonalInfo = () => {
	const [state, setState] = useState(store.getState());
	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
			return () => {
				unsubscribe();
			};
		});
	}, []);

	const { name, age } = state;
	const onUserUpdate = () => {
		const { name, email, phone } = state;
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
