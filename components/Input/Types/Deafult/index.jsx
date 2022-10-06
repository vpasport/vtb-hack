import PropTypes from 'prop-types';

import styles from './style.module.scss';

const DefaultInput = ({ typeDefault = '', ...props }) => {
    return (
        <input className={styles.input} type='{typeDefaultInput}' {...props} />
    );
};

DefaultInput.propTypes = {
	typeDefault: PropTypes.string.isRequired,
};

export { DefaultInput };
