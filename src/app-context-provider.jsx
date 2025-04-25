import { UserContacts } from './components/user-block/components/index.js';

export const AppContextProvider = ({ userValue, children }) => {
	return <UserContacts value={userValue}>{children}</UserContacts>;
};
