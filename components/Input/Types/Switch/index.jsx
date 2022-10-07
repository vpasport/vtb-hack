import styles from './style.module.scss';

const SwitchInput = ({value, text, ...props }) => {

    console.log(props)
    // const stylesContainer = props.disabled ? styles.container  + ' ' + styles['container-disabled'] :  styles.container;
    return (
        
        <label className={styles.switch}><p className={styles.switch_text}>{text}</p> 
            <input type="checkbox" checked={value} {...props} />
            <span className={styles.slider + ' ' + styles.round}></span>
        </label>
    )
};


export { SwitchInput };
