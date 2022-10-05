import React from 'react';
import PropTypes from 'prop-types';

import * as buttonTypes from './Types';

const Button = ({ type = 'default', ...props }) => {
	return React.createElement(buttonTypes[type], props);
};

Button.propTypes = {
	type: PropTypes.oneOf(Object.keys(buttonTypes)),
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
		.isRequired,
	onClick: PropTypes.func,
	rightIcon: PropTypes.func,
	leftIcon: PropTypes.func,
};

export { Button };
