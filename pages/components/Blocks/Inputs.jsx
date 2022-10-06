import { useState } from 'react';

import { Input } from '@components';

const InputsBlock = () =>
{
    const [defaultInput, setDeafultInput] = useState('jgfyryc')
	return (
		<div
				style={{
					width: 200,
					display: 'flex',
					flexDirection: 'column',
					gap: 10,
            } }>
            <h3>Инпуты:</h3>
            <Input  value={ defaultInput } onChange={ (e) => setDeafultInput(e.target.value) } placeholder='Your name' />        
			<Input  disabled value={ 'Disabled input' }/>
		</div>
	);
};

export { InputsBlock };
