import styles from './style.module.scss';

const CheckboxInput = ({...props }) => {

    const stylesContainer = props.disabled ? styles.container  + ' ' + styles['container-disabled'] :  styles.container;
    return (
        
        <label className={stylesContainer}  >{props.text}
            <input type="checkbox" checked={props.value} {...props}  />
            <span className={styles.checkmark} ></span>
        </label>
   );
};


export { CheckboxInput };
