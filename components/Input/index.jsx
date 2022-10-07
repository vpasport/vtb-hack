import React from 'react';
import PropTypes from 'prop-types';

import * as inputTypes from './Types';

const Input = ({ type = 'default', ...props }) =>
{

    let propsInput = {
        ...props,
    }
    if(type === 'default'){
        propsInput = {
            ...propsInput,
            type: props.typedefault ? props.typedefault : 'text'
        }
    
        delete propsInput.typedefault;
    }
    
	return React.createElement(inputTypes[type], propsInput);
};

Input.propTypes = {
	type: PropTypes.oneOf(Object.keys(inputTypes)),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    rightIcon: PropTypes.func,
	leftIcon: PropTypes.func
};

export { Input };
