// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect, useState } from 'react';

// import {
// 	selectLoadingProducts,
// 	selectProducts,
// 	getProducts,
// } from '@store/slices/productsSlice';

import { UserCard } from '@components';

import styles from './style.module.scss';

const UsersPage = ({}) => {
	// const products = useSelector(selectProducts);
	// const productsLoading = useSelector(selectLoadingProducts);

	// const dispstch = useDispatch();

	// useEffect(() => {
	// 	dispstch(getProducts());
	// }, []);



	return (
		<div className={styles.root}>
			<h2 className={styles.root_headline}>Пользователи</h2>
			<UserCard avatar={''} name={'anyalozovaya'} />
		</div>
	);
};

export default UsersPage;
