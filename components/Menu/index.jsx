import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Avatar } from './Avat';
import { MenuItem } from './MenuItem';
import { routes } from './routes';

import { FiMenu, FiChevronLeft } from 'react-icons/fi';
import styles from './style.module.scss';

const Menu = () => {
	const router = useRouter();

	const [isFull, setIsFull] = useState(false);
	const [selected, setSelected] = useState(null);

	useEffect(() => {
		  routes.forEach((el, idx) =>
			new RegExp(`^${el.path}`, 'g').test(router.pathname)
				? setSelected(idx)
				: setSelected(null)
		);
	}, [router]);

	return (
		<div
			className={styles.menu}
			style={{
				width: isFull ? 250 : 80,
			}}>
			<div className={styles['menu-items']}>
				<div
					className={styles['menu-header']}
					onClick={() => setIsFull((prev) => !prev)}>
					{isFull ? (
						<>
							<FiChevronLeft
								className={styles['menu-header-icon']}
							/>
							<span>Меню</span>
						</>
					) : (
						<FiMenu className={styles['menu-header-icon']} />
					)}
				</div>
				{routes.map((el, idx) => (
					<MenuItem
						title={el.name}
						isFull={isFull}
						key={el.path}
						icon={el.icon}
						selected={idx === selected}
						action={() => {
							setSelected(idx);
							router.push(el.path);
						}}
					/>
				))}
			</div>
			<div className={styles['menu-avatar']}>
				<Avatar />
			</div>
		</div>
	);
};

export { Menu };
