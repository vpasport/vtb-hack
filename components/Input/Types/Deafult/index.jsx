import PropTypes from 'prop-types';

import styles from './style.module.scss';

const DefaultInput = ({ typeDefault = '', ...props }) => {

    if(!props.description){
        return <input className={styles.input} type='{typeDefaultInput}' {...props} />;
    }

    return (
        <div className={ styles['input-wrapper']}>
            <input className={styles.input} type='{typeDefaultInput}' {...props} />
            <span>{ props.description }</span>
        </div>   
        
    );
};

DefaultInput.propTypes = {
	typeDefault: PropTypes.string,
};

export { DefaultInput };
