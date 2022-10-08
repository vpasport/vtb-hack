import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getUserByID } from '@api/user';

import {
	selectUserById
} from '@store/slices/userSlice';

import { toClassName } from '@utils';
import { Loader, Svg } from '@components';

import styles from './style.module.scss';


const User = ({userInfo = {}}) => {
	const router = useRouter();
    const dispatch = useDispatch();
    
    console.log('userInfo', userInfo)

    const user = useSelector(selectUserById(userInfo.id));
    console.log(user)
	return (
        <div className={ styles.root }>
            { user ? (
                <div className={ styles['user-card-page'] }>
                    {
                        userInfo.avatar ?
                            <Svg type='avatar' className={ styles['user-card_avatar--empty'] } />
                            :
                            <img src={ user.info.avatar } alt={ `Аватар ${ user.info.username }` } />
                    }
                </div> 
            ) : (
                <div>
					<Loader />
				</div>
            )}
		</div>
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
export default User;
