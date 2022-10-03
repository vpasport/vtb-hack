import { useState } from 'react';

import { Island } from '@components';

import styles from './style.module.scss';

const TestPaage = () => {
	const [progress, setProgress] = useState(0);

	return (
		<div className={styles.root}>
			<Island
				badge='Задание'
				description='Description sdf sdf sdf sdf sdf sdf sdf sd fs df sdf sd fs df sdf sdf sdf sd f sdfsdfsdf sfds  sdfhsdjf sd fsd f sdf sd fsd f sd fsd fsd f'
				header='Header'
				progress={progress}
				price={100}
			/>
			<input
				type='range'
				min={0}
				max={100}
				value={progress}
				step='50'
				onChange={({ target: { valueAsNumber } }) =>
					setProgress(valueAsNumber)
				}
			/>
		</div>
	);
};

export default TestPaage;
