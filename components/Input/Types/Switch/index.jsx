import styles from './style.module.scss';

const SwitchInput = ({value, text, ...props }) => {

    console.log(props)
    const stylesSwitch = props.disabled ? styles.switch  + ' ' + styles['switch-disabled'] :  styles.switch;
    return (
        
        <label className={stylesSwitch}><p className={styles.switch_text}>{text}</p> 
            <input type="checkbox" checked={value} {...props} />
            <span className={styles.slider + ' ' + styles.round}></span>
        </label>
    )
};


export { SwitchInput };
