import { useState, useRef } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import styles from './style.module.scss';

const DatePicker = ({value, onChange}) =>
{

    const [isOpenPiscker, setIsOpenPiscker] = useState(false)
    const picker = useRef()
    return (
        <div onClick={ () =>
        {
            if (picker) return setIsOpenPiscker(!isOpenPiscker)
        } } className={ styles.wrapper }>
         
            <input ref={picker}  className={ styles.wrapper_input } type="text" value={ new Date(value).toLocaleString().split(',')[0] } placeholder='Выберите' />
            {isOpenPiscker && <div className={styles.wrapper_picker}>
                <DayPicker 
                    mode="single"
                    selected={ value }
                    onSelect={  onChange }
                />
            </div>}
        </div>
        

    );
}

export {DatePicker}