import { UserPersonalInfo, UserContacts } from './components';

export const UserBlock = () => {
	return (
		<div>
			<h2>User:</h2>
			<UserPersonalInfo />
			<UserContacts />
		</div>
	);
};
