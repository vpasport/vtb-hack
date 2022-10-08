import { useRef, useState } from 'react';

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
                setIsFileLoaded(!isFileLoaded);
            }
            
        }
    }

    const removeFilesItem = (target) => {
        console.log(target)

        setResult('');
        setFileName('0');
        setIsFileLoaded(!isFileLoaded);

        [...dataTransfer.items].forEach((file) =>
        {
            dataTransfer.remove(file);
        });
        onChange([...dataTransfer.files]);
}


// });
    return (
        <div className={ styles['input-file-row'] }>
            
            <div ref={ preview } className={ styles['input-file-list'] }>
                { isFileLoaded &&
                    <div className={ styles['input-file-list-item'] }>
                        <img
                            className={ styles['input-file-list-img'] }
                            src={ result }
                            alt='Loaded file'
                        /> 
                        <span className={ styles['input-file-list-name'] }>{ fileName }</span> 
                        {!!LeftIcon && <LeftIcon onClick={ (e) => removeFilesItem(e) } className={styles['input-file-list-remove']} />}
                        
                    </div>
                }
            </div>  
                <label onChange={() => addFile(fileInput)} className={ styles['input-file']}>
                    <input ref={fileInput} type="file" name="file[]" multiple accept="image/*"/>		
                    <span>Выберите файл</span>
                </label>
	    </div>

    );
}

export {FileLoader}