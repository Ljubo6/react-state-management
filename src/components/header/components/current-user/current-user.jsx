import { store } from '../../../../store.jsx';

export const CurrentUser = () => {
	const { name } = store.getState();
	return (
		<div>
			<div>Current User: {name}</div>
		</div>
	);
};
