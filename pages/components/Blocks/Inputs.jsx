import { useState } from 'react';

import { Input } from '@components';

const InputsBlock = () =>
{
    const [defaultInput, setDeafultInput] = useState('');
	const [checkbox, setCheckbox] = useState(true)
	return (
		<div
				style={{
					width: 200,
					display: 'flex',
					flexDirection: 'column',
					gap: 10,
            } }>
            <h3>Инпуты:</h3>
            <Input  value={ defaultInput } onChange={ (e) => setDeafultInput(e.target.value) } placeholder='Input Default' description={''} />        
			<Input  disabled value={ 'Disabled input Default' }/>
			<Input  type="checkbox" text={ 'Checkbox' } value={checkbox} onClick={ (e) => setCheckbox(e.target.checked) }/>
			<Input disabled type="checkbox" text={ 'Checkbox disabled' } value={true} />
			
		</div>
	);
};

export { InputsBlock };
