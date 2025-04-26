import { useEffect, useState } from 'react';
import { Header, UserBlock } from './components';
import styles from './app.module.css';
import { store } from './store.jsx';

const getUserFromServer = () => ({
	id: 'a11100',
	name: 'Ivan',
	age: 23,
	email: 'ivan@gmail.com',
	phone: '+359-888-555-555',
});
const getAnotherUserFromServer = () => ({
	id: 'a11100',
	name: 'Vasil',
	age: 23,
	email: 'vasil@gmail.com',
	phone: '+359-877-123-456',
});

export const App = () => {
	const [state, setState] = useState(store.getState());
	useEffect(() => {
		const userDataFromServer = getUserFromServer();
		store.dispatch({ type: 'SET_USER_DATA', payload: userDataFromServer });
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});

		return () => unsubscribe();
	}, []);
	const onUserChange = () => {
		const anotherUserDataFromServer = getAnotherUserFromServer();
		store.dispatch({ type: 'SET_USER_DATA', payload: anotherUserDataFromServer });
	};

	return (
		<div className={styles.app}>
			<Header />
			<hr />
			<UserBlock />
			<button onClick={onUserChange}>Change User</button>
		</div>
	);
};
