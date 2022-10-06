import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import { Button } from '../Button';

import * as popupTypes from './Types';

import styles from './style.module.scss'

const Popup = (props) =>
{
    const [isOpen, setIsOpen] = useState(false);
    console.log(props)
    const propsContentPopup = {
        ...props,
        toggle: () => setIsOpen(!isOpen)
    }

    const stylesPopup = props.type === 'confirm' ? styles.popup + ' ' + styles.confirm
        : (props.type === 'custom' ? styles.popup + ' ' + styles.custom : styles.popup);
    
    return (
        <>
            <Button type={ props.button } className={ props.classNameButton } onClick={ () => setIsOpen(!isOpen) }>{ props.buttonText }</Button>
            
            <Modal
                isOpen={isOpen}
                onRequestClose={propsContentPopup.toggle}
                className={stylesPopup}
                overlayClassName={ styles.popup_overlay }
                closeTimeoutMS={0}
                ariaHideApp={false}
                { ...props }>
                    { React.createElement(popupTypes[props.type], propsContentPopup)} 
            </Modal>
            
        </>
    )
};

Popup.propTypes = {
	type: PropTypes.oneOf(Object.keys(popupTypes)).isRequired,
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
};

export { Popup };
