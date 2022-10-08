import { useRef, useState } from 'react';

import { Svg } from '@components';

import DataTransfer from './DataTransfer';

import styles from './style.module.scss';

const FileLoader = ({
    onChange, 
    leftIcon: LeftIcon = null
}) =>
{
    const fileInput = useRef();
    const preview = useRef();

    const [isFileLoaded, setIsFileLoaded] = useState(false);
    const [result, setResult] = useState('');
    const [fileName, setFileName] = useState('');
    
    const dataTransfer = new DataTransfer();
 
    const addFile = (input) =>{
        const file = input.current.files[0];

        if (file){
            dataTransfer.items.add(file);
            
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () =>
            {
                setResult(reader.result);
                setFileName(file.name);
                setIsFileLoaded(true);
            }
            
        }
    }

    const removeFilesItem = (target) => {
        console.log(target)

        setResult('');
        setFileName('0');
        setIsFileLoaded(false);

        [...dataTransfer.items].forEach((file) =>
        {
            dataTransfer.remove(file);
        });
        onChange([...dataTransfer.files]);
}


// });
    return (
        <div className={ styles.file }>
            
            <div ref={ preview } className={ styles.file_preview }>
                {!isFileLoaded  && <Svg type='empty'/> }
                { !!isFileLoaded &&
                    <div className={ styles.file_preview__content }>
                        <img
                            className={ styles['file_preview__content--img'] }
                            src={ result }
                            alt='Loaded file'
                        /> 
                        <span className={ styles['file_preview__content--label'] }>{ fileName }</span> 
                        {!!LeftIcon && <LeftIcon onClick={ (e) => removeFilesItem(e) } className={  styles['file_preview__content--icon']    } />}
                        
                    </div>
                }
            </div>  
                <label onChange={() => addFile(fileInput)} className={ styles.file_input}>
                    <input ref={fileInput} type="file" name="file[]" multiple accept="image/*"/>		
                    <span>Выберите файл</span>
                </label>
	    </div>

    );
}

export {FileLoader}