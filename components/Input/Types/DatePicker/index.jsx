import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import styles from './style.module.scss';

const DatePicker = ({value, onChange}) =>
{
    
    return (
        <ReactDatePicker
                className={styles.input}
                placeholderText="Select date"
                onChange={onChange}
                selected={value}
        />
    )
}

export {DatePicker}