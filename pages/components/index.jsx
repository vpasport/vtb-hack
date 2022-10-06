import { useState } from 'react';

import { Button, Popup } from '@components';
import { NotificationsBlock, IslandBlock, ButtonsBlock } from './Blocks';

import styles from './style.module.scss';

const TestPaage = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleModal = () => {
		console.log('Кнопка для попапа');
		setIsOpen(!isOpen);
	};

	return (
		<div className={styles.root}>
			<IslandBlock />
			<NotificationsBlock />
			<ButtonsBlock />
			<div
				style={{
					width: 300,
					display: 'flex',
					flexDirection: 'column',
					gap: 10,
				}}>
				<Button
					type='border'
					className={styles.button}
					onClick={toggleModal}>
					Вызывать попап
				</Button>
				<Popup
					type='success'
					isOpen={isOpen}
					toggle={toggleModal}
					contentLabel='Success'
					closeTimeoutMS={0}
					ariaHideApp={false}>
					It is Success!
				</Popup>
			</div>
		</div>
	);
};

export default TestPaage;
