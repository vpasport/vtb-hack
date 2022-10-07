import PropTypes from 'prop-types';

import styles from './style.module.scss';

const DefaultInput = ({ 
    type = 'text', 
    leftIcon: LeftIcon = null,
	rightIcon: RightIcon = null,
    ...props }) => {
   
    const stylesInput = props.disabled ? styles.input  + ' ' + styles['disabled'] :  styles.input;

    return (
        <div className={styles.wrapper}>  
            <div className={stylesInput}>
                {!!LeftIcon && <LeftIcon className={styles.input_icon__left}/>}  
                <input type={type}  {...props} />
                {!!RightIcon && <RightIcon className={styles.input_icon__right} />}  
            </div>
            <p className={styles.input_description}>{ props.description }</p>
        </div>         
    );
};

DefaultInput.propTypes = {
	type: PropTypes.string,
};

export { DefaultInput };
