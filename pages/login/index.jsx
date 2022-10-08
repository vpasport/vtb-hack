import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	login as loginApi,
	signup as signupApi,
	selectInfo,
	selectLoading,
} from '@store/slices/userSlice';

import { Button, Forms } from '@components';

import { LoginIcon } from './LoginIcon';
import styles from './style.module.scss';
import { toClassName } from '@utils/toClassName';

const LoginPage = () => {
	const [signup, setSignup] = useState(false);

	const router = useRouter();
	const dispatch = useDispatch();
	const loading = useSelector(selectLoading);
	const info = useSelector(selectInfo);

	const _login = (data) => {
		dispatch(loginApi(data));
	};

	const _signup = (data) => {
		dispatch(signupApi(data));
	};

	useEffect(() => {
		if (info !== null) {
			router.push('/tasks');
		}
	}, [info]);

	return (
		<div className={toClassName(styles.root, signup && styles.root_signup)}>
			<LoginIcon
				className={toClassName(styles.icon, signup && styles.icon_mini)}
			/>
			{signup ? (
				<Forms.SignUpForm
					onSubmit={(data) => _signup(data)}
					onCancel={() => setSignup(false)}
					loading={loading}
				/>
			) : (
				<>
					<Forms.LoginForm
						onSubmit={(data) => _login(data)}
						loading={loading}
					/>
					<Button type='text' onClick={() => setSignup(true)}>
						Зарегистрироваться
					</Button>
				</>
			)}
		</div>
	);
};

export default LoginPage;
