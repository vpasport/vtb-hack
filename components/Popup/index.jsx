import {React, useState} from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';

import * as popupTypes from './Types';

const Popup = (props) =>
{
    console.log(props)
    const [isOpen, setIsOpen] = useState(false);
    // const propsPopup = {
    //     ...props,
    //     isOpen,
    //     toggle: () => setIsOpen(!isOpen)
    // }

    return (
        <>
            <Button type={props.button} className={props.className} onClick={() => setIsOpen(!isOpen)}>{props.buttonText }</Button>
            { React.createElement(popupTypes[props.type],
                {
                    ...props,
                    isOpen,
                    toggle: () => setIsOpen(!isOpen)
                }
            ) } 
        </>
    )
};

Popup.propTypes = {
	type: PropTypes.oneOf(Object.keys(popupTypes)).isRequired,
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
};

export { Popup };
