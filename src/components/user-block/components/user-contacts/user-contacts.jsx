import { store } from '../../../../store.jsx';

export const UserContacts = () => {
	const { email, phone } = store.getState();
	return (
		<div>
			<h3>Contacts:</h3>
			<div>Email: {email}</div>
			<div>Phone: {phone}</div>
		</div>
	);
};
