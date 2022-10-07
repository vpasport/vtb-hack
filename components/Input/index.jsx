import React from 'react';
import PropTypes from 'prop-types';

import * as inputTypes from './Types';

const Input = ({ type = 'default', ...props }) =>
{
    console.log(props)
	return React.createElement(inputTypes[type], props);
};

Input.propTypes = {
	type: PropTypes.oneOf(Object.keys(inputTypes)),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
    onChange: PropTypes.func,
    onClick: PropTypes.func
};

export { Input };
