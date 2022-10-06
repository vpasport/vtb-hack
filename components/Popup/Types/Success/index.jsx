import {Check} from './Check';

import styles from './style.module.scss';

const SuccessPopup = ({ children }) => {
	return (
        <div className={ styles['popup-success'] }>
            <div className={ styles['popup-success_circle'] }>
	            <Check className={styles['popup-success_circle__icon'] }/> 
            </div>
            <h2 className={ styles['popup-success_description'] }>{ children }</h2>
        </div>
	);
};

export { SuccessPopup };
