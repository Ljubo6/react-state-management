import { store } from '../../../../store.jsx';
import { useEffect, useState } from 'react';

export const UserContacts = () => {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});
		return () => unsubscribe();
	}, []);
	const { email, phone } = state;
	return (
		<div>
			<h3>Contacts:</h3>
			<div>Email: {email}</div>
			<div>Phone: {phone}</div>
		</div>
	);
};
