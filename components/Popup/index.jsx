import React from 'react';
import PropTypes from 'prop-types';

import * as popupTypes from './Types';

const Popup = (props) => {
	return React.createElement(popupTypes[props.type], props);
};

Popup.propTypes = {
	type: PropTypes.oneOf(Object.keys(popupTypes)).isRequired,
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
		.isRequired,
	onClick: PropTypes.func,
};

export { Popup };
