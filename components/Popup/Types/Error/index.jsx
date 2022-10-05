import Modal from 'react-modal';

import {Cross} from './Cross';

import styles from './style.module.scss';

const ErrorPopup = ({ children, isOpen, toggle, ...props }) => {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={toggle}
			className={styles.popup}
			overlayClassName={styles.popup_overlay}
            { ...props }>
            
            <div className={ styles['popup-error'] }>
                <div className={ styles['popup-error_circle'] }>
                    <Cross className={styles['popup-error_circle__icon'] }/> 
                </div>
                <h2 className={ styles['popup-error_description'] }>{ children }</h2>
            </div>
            
            
			
		</Modal>
	);
};

export { ErrorPopup };
