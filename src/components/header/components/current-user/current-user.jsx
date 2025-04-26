import { store } from '../../../../store.jsx';
import { useEffect, useState } from 'react';

export const CurrentUser = () => {
	const [state, setState] = useState(store.getState());
	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});
		return () => {
			unsubscribe();
		};
	}, []);
	const { name } = state;
	return (
		<div>
			<div>Current User: {name}</div>
		</div>
	);
};
