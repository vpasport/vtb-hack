import {Cross} from './Cross';

import styles from './style.module.scss';

const ErrorPopup = ({ children }) => {
	return (
        <div className={ styles['popup-error'] }>
    	    <div className={ styles['popup-error_circle'] }>
                <Cross className={styles['popup-error_circle__icon'] }/> 
            </div>
            <h2 className={ styles['popup-error_description'] }>{ children }</h2>
        </div>
	);
};

export { ErrorPopup };
