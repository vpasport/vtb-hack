import Modal from 'react-modal';

import {Check} from './Check';

import styles from './style.module.scss';

const SuccessPopup = ({ children, isOpen, toggle, ...props }) => {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={toggle}
			className={styles.popup}
			overlayClassName={ styles.popup_overlay }
			closeTimeoutMS={0}
        	ariaHideApp={false}
            { ...props }>
            
            <div className={ styles['popup-success'] }>
                <div className={ styles['popup-success_circle'] }>
                    <Check className={styles['popup-success_circle__icon'] }/> 
                </div>
                <h2 className={ styles['popup-success_description'] }>{ children }</h2>
            </div>
            
            
			
		</Modal>
	);
};

export { SuccessPopup };
