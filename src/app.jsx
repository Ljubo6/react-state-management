import { useEffect } from 'react';
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
	email: 'ivan@gmail.com',
	phone: '+359-888-555-555',
});

export const App = () => {
	useEffect(() => {
		const userDataFromServer = getUserFromServer();
		store.dispatch({ type: 'SET_USER_DATA', payload: userDataFromServer });
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
