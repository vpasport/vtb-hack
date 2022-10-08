import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { login, selectInfo, selectLoading } from '@store/slices/userSlice';

import { LoginForm } from './components';

import { LoginIcon } from './LoginIcon';
import styles from './style.module.scss';

const LoginPage = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const loading = useSelector(selectLoading);
	const info = useSelector(selectInfo);

	const _login = (data) => {
		console.log(data);
		dispatch(login(data));
	};

	useEffect(() => {
		console.log(1, info);
		if (info !== null) {
			router.push('/tasks');
		}
	}, [info]);

	return (
		<div className={styles.root}>
			<LoginIcon className={styles.icon} />
			<LoginForm onSubmit={(data) => _login(data)} loading={loading} />
		</div>
	);
};

export default LoginPage;
