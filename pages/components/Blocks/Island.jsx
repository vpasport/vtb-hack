import { useState } from 'react';

import { Island } from '@components';

const IslandBlock = () => {
	const [progress, setProgress] = useState(0);

	return (
		<div>
			<h3>Прогресс задания:</h3>
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
	);
};

export { IslandBlock };
