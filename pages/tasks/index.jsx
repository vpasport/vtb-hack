import { useState } from 'react';

import { Tasks } from '@components'

import styles from './style.module.scss';

const TasksPage = ({ }) =>
{
    const [tasks] = useState([
        {
            type: 'weekly',
			badge: 'Задание',
			description: 'Description f',
			header: 'Header',
			progress: '',
			price: 100,
			onButtonClick: () => console.log('Task is clicked'),
            buttonText: 'Button'
        },
        {
			badge: 'Задание',
			description: 'Description f',
			header: 'Header',
			progress: '',
			price: 100,
			onButtonClick: () => console.log('Task is clicked'),
            buttonText: 'Button'
        },
        {
            type: 'weekly',
			badge: 'Задание',
			description: 'Description f',
			header: 'Header',
			progress: '',
			price: 100,
			onButtonClick: () => console.log('Task is clicked'),
            buttonText: 'Button'
        },
        {
			badge: 'Задание',
			description: 'Description f',
			header: 'Header',
			progress: '',
			price: 100,
			onButtonClick: () => console.log('Task is clicked'),
            buttonText: 'Button'
        },
        {
            type: 'weekly',
			badge: 'Задание',
			description: 'Description f',
			header: 'Header',
			progress: '',
			price: 100,
			onButtonClick: () => console.log('Task is clicked'),
            buttonText: 'Button'
        },
        {
			badge: 'Задание',
			description: 'Description sdf sdf sdf sdf sdf sdf sdf sd fs df sdf sd fs df sdf sdf sdf sd f sdfsdfsdf sfds  sdfhsdjf sd fsd f sdf sd fsd f sd fsd fsd f',
			header: 'Header',
			progress: '',
			price: 100,
			onButtonClick: () => console.log('Task is clicked'),
            buttonText: 'Button'
        },
        {
            type: 'weekly',
			badge: 'Задание',
			description: 'Description f',
			header: 'Header',
			progress: '',
			price: 100,
			onButtonClick: () => console.log('Task is clicked'),
            buttonText: 'Button'
        },
        {
			badge: 'Задание',
			description: 'Description sdf sdf sdf sdf sdf sdf sdf sd fs df sdf sd fs df sdf sdf sdf sd f sdfsdfsdf sfds  sdfhsdjf sd fsd f sdf sd fsd f sd fsd fsd f',
			header: 'Header',
			progress: '',
			price: 100,
			onButtonClick: () => console.log('Task is clicked'),
            buttonText: 'Button'
        },
        {
            type: 'weekly',
			badge: 'Задание',
			description: 'Description f',
			header: 'Header',
			progress: '',
			price: 100,
			onButtonClick: () => console.log('Task is clicked'),
            buttonText: 'Button'
        },
        {
			badge: 'Задание',
			description: 'Description sdf sdf sdf sdf sdf sdf sdf sd fs df sdf sd fs df sdf sdf sdf sd f sdfsdfsdf sfds  sdfhsdjf sd fsd f sdf sd fsd f sd fsd fsd f',
			header: 'Header',
			progress: '',
			price: 100,
			onButtonClick: () => console.log('Task is clicked'),
            buttonText: 'Button'
        },
        {
            type: 'weekly',
			badge: 'Задание',
			description: 'Description f',
			header: 'Header',
			progress: '',
			price: 100,
			onButtonClick: () => console.log('Task is clicked'),
            buttonText: 'Button'
        },
        {
			badge: 'Задание',
			description: 'Description sdf sdf sdf sdf sdf sdf sdf sd fs df sdf sd fs df sdf sdf sdf sd f sdfsdfsdf sfds  sdfhsdjf sd fsd f sdf sd fsd f sd fsd fsd f',
			header: 'Header',
			progress: '',
			price: 100,
			onButtonClick: () => console.log('Task is clicked'),
            buttonText: 'Button'
        },
        {
            type: 'weekly',
			badge: 'Задание',
			description: 'Description f',
			header: 'Header',
			progress: '',
			price: 100,
			onButtonClick: () => console.log('Task is clicked'),
            buttonText: 'Button'
        },
        {
			badge: 'Задание',
			description: 'Description f',
			header: 'Header',
			progress: '',
			price: 100,
			onButtonClick: () => console.log('Task is clicked'),
            buttonText: 'Button'
        }
    ])
	return (
		<div className={styles.root}>
            <h2 className={styles.root_headline}>Задания</h2>
            <Tasks tasks={ tasks } />
		</div>
	);
};

export default TasksPage;
