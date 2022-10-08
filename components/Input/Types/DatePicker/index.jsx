import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import styles from './style.module.scss';

const DatePicker = ({value, onChange}) =>
{
    
    return (
        <ReactDatePicker
                dateFormat='dd.MM.yyyy'
                className={styles.input}
                placeholderText="Select date"
                selected={value}
                onChange={onChange}
        />
    )
}

export {DatePicker}