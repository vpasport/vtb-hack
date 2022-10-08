import styles from './style.module.scss';

const CheckboxInput = ({ value, disabled, text, onChange }) => {
    const stylesContainer = disabled ? styles.container  + ' ' + styles['container-disabled'] :  styles.container;
    return (
        
        <label className={stylesContainer}  >{text}
            <input type="checkbox" checked={value} onChange={ onChange } />
            <span className={styles.checkmark} ></span>
        </label>
   );
};


export { CheckboxInput };
