import React from 'react';
import PropTypes from 'prop-types';

import * as buttonTypes from './Types';

const Button = (props) =>
{
	return React.createElement(buttonTypes[props.type], props);
};

Button.propTypes = {
	type: PropTypes.oneOf(Object.keys(buttonTypes)).isRequired,
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
		.isRequired,
	onClick: PropTypes.func,
};

export { Button };
