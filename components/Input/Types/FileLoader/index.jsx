import { useRef, useState} from 'react';
import Image from 'next/image';

import DataTransfer from './DataTransfer';

import styles from './style.module.scss';

const FileLoader = ({onChange}) =>
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
        onChange([...dataTransfer.files]);
    }

    const removeFilesItem = (target) => {
        console.log(target)
	// let name = $(target).prev().text();
	// let input = $(target).closest('.input-file-row').find('input[type=file]');	
	// $(target).closest('.input-file-list-item').remove();	
	// for(let i = 0; i < dt.items.length; i++){
	// 	if(name === dt.items[i].getAsFile().name){
	// 		dt.items.remove(i);
	// 	}
	// }
	// input[0].files = dt.files;  
}


// });
    return (
        <div className={ styles['input-file-row']}>
            <div ref={ preview } className={ styles['input-file-list'] }>
                { isFileLoaded &&
                    <div className={ styles['input-file-list-item'] }>
                        <Image
                            className={ styles['input-file-list-img'] }
                            src={ result } alt='Loaded file'
                        /> 
                        <span className={ styles['input-file-list-name'] }>{fileName}</span> 
                        <a href="#" onClick={ (e) => removeFilesItem(e) } className={ styles['input-file-list-remove'] }>x</a> 
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