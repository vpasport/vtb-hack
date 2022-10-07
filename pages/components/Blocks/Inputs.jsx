import { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import {RiLockPasswordFill} from 'react-icons/ri';

import { Input } from '@components';

const InputsBlock = () =>
{
    const [pass, setPass] = useState('');
	const [num, setNum] = useState('');
	const [search, setSearch] = useState('');
	const [defaultInput, setDeafultInput] = useState('');
	const [checkbox, setCheckbox] = useState(true)
	const [swicthValue, setSwitchValue] = useState(false)

	return (
		<div
				style={{
					width: 200,
					display: 'flex',
					flexDirection: 'column',
					gap: 20,
            } }>
            <h3>Инпуты:</h3>
				<Input 	typedefault="password" rightIcon={RiLockPasswordFill} value={ pass } onChange={ (e) => setPass(e.target.value) } placeholder='Input - Password' description={''} /> 
				<Input 	typedefault="text" value={ defaultInput } onChange={ (e) => setDeafultInput(e.target.value) } placeholder='Input - Text' description={''} />  
				<Input 	typedefault="number" value={ num } onChange={ (e) => setNum(e.target.value) } placeholder='Input - Number' description={''} />
				<Input 	typedefault="search" leftIcon={BiSearchAlt2} value={ search } onChange={ (e) => setSearch(e.target.value) } placeholder='Search...' description={'Поиск чего-то важного'} />     

				<Input  disabled value={ 'Disabled input Default' }/>

				<Input type="checkbox" text={ 'Checkbox' } value={checkbox} onChange={ (e) => setCheckbox(e.target.checked) }/>
				<Input disabled type="checkbox" text={ 'Checkbox disabled' } value={true} />

				<Input type="switch" text={ 'Switch' } value={swicthValue} onChange={ (e) => setSwitchValue(e.target.checked) }/>
			
		</div>
	);
};

export { InputsBlock };
