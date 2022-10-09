import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getUserByID } from '@api/user';

import {
	selectUserById
} from '@store/slices/userSlice';

import { toClassName } from '@utils';
import { Loader, Svg, Button, Toolbar } from '@components';

// import styles from './style.module.scss';


const EditUser = ({userInfo = {}}) => {
	const router = useRouter();
    const dispatch = useDispatch();
    

	const user = useSelector(selectUserById(userInfo.id));
	
	return (
       <h1>Помогите...</h1>
	);
};

export const getServerSideProps = async ({ params: { id }, res }) => {
	let result = await getUserByID(id);

	if (false) {
		res.writeHead(301, { Location: '/404' });
		res.end();

		return true;
	}

	return {
		props: {
			userInfo: result.data,
		},
	};
};
export default EditUser;
