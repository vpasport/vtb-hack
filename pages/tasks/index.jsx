import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Tasks } from '@components';

import { selectInfo } from '@store/slices/userSlice';

import styles from './style.module.scss';

const TasksPage = ({ test }) => {
	console.log(test);
	console.log(useSelector(selectInfo));

	const [tasks] = useState([
		{
			type: 'weekly',
			badge: 'Задание',
			description: 'Description f',
			header: 'Header',
			progress: '',
			price: 100,
			onButtonClick: () => console.log('Task is clicked'),
			buttonText: 'Button',
		},
		{
			badge: 'Задание',
			description: 'Description f',
			header: 'Header',
			progress: '',
			price: 100,
			onButtonClick: () => console.log('Task is clicked'),
			buttonText: 'Button',
		},
		{
			type: 'weekly',
			badge: 'Задание',
			description: 'Description f',
			header: 'Header',
			progress: '',
			price: 100,
			onButtonClick: () => console.log('Task is clicked'),
			buttonText: 'Button',
		},
		{
			badge: 'Задание',
			description: 'Description f',
			header: 'Header',
			progress: '',
			price: 100,
			onButtonClick: () => console.log('Task is clicked'),
			buttonText: 'Button',
		},
		{
			type: 'weekly',
			badge: 'Задание',
			description: 'Description f',
			header: 'Header',
			progress: '',
			price: 100,
			onButtonClick: () => console.log('Task is clicked'),
			buttonText: 'Button',
		},
		{
			badge: 'Задание',
			description:
				'Description sdf sdf sdf sdf sdf sdf sdf sd fs df sdf sd fs df sdf sdf sdf sd f sdfsdfsdf sfds  sdfhsdjf sd fsd f sdf sd fsd f sd fsd fsd f',
			header: 'Header',
			progress: '',
			price: 100,
			onButtonClick: () => console.log('Task is clicked'),
			buttonText: 'Button',
		},
		{
			type: 'weekly',
			badge: 'Задание',
			description: 'Description f',
			header: 'Header',
			progress: '',
			price: 100,
			onButtonClick: () => console.log('Task is clicked'),
			buttonText: 'Button',
		},
		{
			badge: 'Задание',
			description:
				'Description sdf sdf sdf sdf sdf sdf sdf sd fs df sdf sd fs df sdf sdf sdf sd f sdfsdfsdf sfds  sdfhsdjf sd fsd f sdf sd fsd f sd fsd fsd f',
			header: 'Header',
			progress: '',
			price: 100,
			onButtonClick: () => console.log('Task is clicked'),
			buttonText: 'Button',
		},
		{
			type: 'weekly',
			badge: 'Задание',
			description: 'Description f',
			header: 'Header',
			progress: '',
			price: 100,
			onButtonClick: () => console.log('Task is clicked'),
			buttonText: 'Button',
		},
		{
			badge: 'Задание',
			description:
				'Description sdf sdf sdf sdf sdf sdf sdf sd fs df sdf sd fs df sdf sdf sdf sd f sdfsdfsdf sfds  sdfhsdjf sd fsd f sdf sd fsd f sd fsd fsd f',
			header: 'Header',
			progress: '',
			price: 100,
			onButtonClick: () => console.log('Task is clicked'),
			buttonText: 'Button',
		},
		{
			type: 'weekly',
			badge: 'Задание',
			description: 'Description f',
			header: 'Header',
			progress: '',
			price: 100,
			onButtonClick: () => console.log('Task is clicked'),
			buttonText: 'Button',
		},
		{
			badge: 'Задание',
			description:
				'Description sdf sdf sdf sdf sdf sdf sdf sd fs df sdf sd fs df sdf sdf sdf sd f sdfsdfsdf sfds  sdfhsdjf sd fsd f sdf sd fsd f sd fsd fsd f',
			header: 'Header',
			progress: '',
			price: 100,
			onButtonClick: () => console.log('Task is clicked'),
			buttonText: 'Button',
		},
		{
			type: 'weekly',
			badge: 'Задание',
			description: 'Description f',
			header: 'Header',
			progress: '',
			price: 100,
			onButtonClick: () => console.log('Task is clicked'),
			buttonText: 'Button',
		},
		{
			badge: 'Задание',
			description: 'Description f',
			header: 'Header',
			progress: '',
			price: 100,
			onButtonClick: () => console.log('Task is clicked'),
			buttonText: 'Button',
		},
	]);
	return (
		<div className={styles.root}>
			<h2 className={styles.root_headline}>Задания</h2>
			<Tasks tasks={tasks} />
		</div>
	);
};

export const getServerSideProps = async (params) => {
	return {
		props: {
			test: 1,
		},
	};
};

export default TasksPage;
