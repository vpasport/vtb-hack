import React from 'react';
import PropTypes from 'prop-types';

import * as popupTypes from './Types';

const Popup = (props) =>
{
    console.log(popupTypes, props.type, props)
    // return React.createElement(popupTypes[props.type], props);
    return <div>{ props.children }</div>
};

Popup.propTypes = {
	type: PropTypes.oneOf(Object.keys(popupTypes)).isRequired,
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
    toggle: PropTypes.func,
    isOpen: PropTypes.bool,
};

export { Popup };
