import { useState } from 'react';

import { Island, Notification, Button, Popup } from '@components';
import { useNotifications } from '@hooks';

import styles from './style.module.scss';

const TestPaage = () => {
	const [progress, setProgress] = useState(0);
	const { pushNotifications } = useNotifications();

	const [isOpen, setIsOpen] = useState(false);

	const toggleModal = () =>
	{
		console.log("Кнопка для попапа")
    	setIsOpen(!isOpen);
	};
	
	return (
		<div className={ styles.root }>
			<div>
				<input
					type='range'
					min={0}
					max={100}
					value={progress}
					step='5'
					onChange={({ target: { valueAsNumber } }) =>
						setProgress(valueAsNumber)
					}
				/>
				<Island
					badge='Задание'
					description='Description sdf sdf sdf sdf sdf sdf sdf sd fs df sdf sd fs df sdf sdf sdf sd f sdfsdfsdf sfds  sdfhsdjf sd fsd f sdf sd fsd f sd fsd fsd f'
					header='Header'
					progress={progress}
					price={100}
					onButtonClick={() =>
						pushNotifications(<div>{new Date().toISOString()}</div>)
					}
					buttonText='Button'
				/>
			</div>
			<div
				style={{
					width: 300,
					display: 'flex',
					flexDirection: 'column',
					gap: 10,
				} }>
				<Button type='border' className={styles.button} onClick={toggleModal}>
					Вызывать попап
				</Button>
				<Popup
					type='success'
        			isOpen={isOpen}
        			toggle={toggleModal}
        			contentLabel="Success"
        			closeTimeoutMS={0}
        			ariaHideApp={false}
				>
					It is Success!
      			</Popup>
				<h3>Уведомления:</h3>
				<Button
					type='border'
					className={styles.button}
					onClick={() =>
						pushNotifications({
							type: 'default',
							header: 'Header',
							description: new Date().toISOString(),
							onClose: () => console.log('close default'),
						})
					}>
					Показать Default
				</Button>
				<Button
					type='border'
					className={styles.button}
					onClick={() =>
						pushNotifications({
							type: 'warning',
							header: 'Header',
							description: new Date().toISOString(),
							onClose: () => console.log('close warning'),
						})
					}>
					Показать Warning
				</Button>
				<Button
					type='border'
					className={styles.button}
					onClick={() =>
						pushNotifications({
							type: 'success',
							header: 'Header',
							description: new Date().toISOString(),
							onClose: () => console.log('close success'),
						})
					}>
					Показать Success
				</Button>
				<Button
					type='border'
					className={styles.button}
					onClick={() =>
						pushNotifications({
							type: 'error',
							header: 'Header',
							description: new Date().toISOString(),
							onClose: () => console.log('close error'),
						})
					}>
					Показать Error
				</Button>
				<Button
					type='border'
					className={styles.button}
					onClick={() =>
						pushNotifications({
							type: 'custom',
							custom: <span>Это кастомный компонет</span>,
							onClose: () => console.log('close custom'),
							className: styles['custom-notification'],
						})
					}>
					Показать Custom
				</Button>
			</div>
		</div>
	);
};

export default TestPaage;
