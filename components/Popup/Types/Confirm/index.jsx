import Modal from 'react-modal';

import { Confirm } from './Confirm';
import { Button } from '@components';

import styles from './style.module.scss';

const ConfirmPopup = ({ children, isOpen, toggle, buttonPopupConfirm, buttonPopupDelete, ...props }) => {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={toggle}
			className={styles.popup}
			overlayClassName={ styles.popup_overlay }
			closeTimeoutMS={0}
        	ariaHideApp={false}
            { ...props }>
            
            <div className={ styles['popup-confirm'] }>
                <div className={ styles['popup-confirm_circle'] }>
                    <Confirm className={styles['popup-confirm_circle__icon'] }/> 
                </div>
				<h2 className={ styles['popup-confirm_description'] }>{ children }</h2>
				<div className={ styles['popup-confirm_btns'] }>
					<Button type='default' onClick={toggle}>
						{buttonPopupConfirm}
					</Button>
					<Button type='border' onClick={toggle}>
						{buttonPopupDelete}
					</Button>
				</div>
            </div>
            
            
			
		</Modal>
	);
};

export { ConfirmPopup };
