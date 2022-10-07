

// import styles from './style.module.scss';

// import { useRef } from "react";

const DropdownInput = ({ text, ...props }) => {
   
    // const stylesInput = props.disabled ? styles.input  + ' ' + styles['disabled'] :  styles.input;
    
    const selectMultiple =  (e)=> {
        console.log(e)
        var el = e.target;  
        if (el.tagName.toLowerCase() == 'option' && el.parentNode.hasAttribute('multiple')) {
        e.preventDefault();

        // toggle selection
        if (el.hasAttribute('selected')) el.removeAttribute('selected');
        else el.setAttribute('selected', '');

        // hack to correct buggy behavior
        var select = el.parentNode.cloneNode(true);
        el.parentNode.parentNode.replaceChild(select, el.parentNode);
    }}

    return (
        <>

            <h4>{text}</h4>

            
            {/* <div onClick={(e)=> selectMultiple(e)} >
                <select  className="select-css"   {...props}> 
                    <option>Apples</option> 
                    <option>Bananas</option> 
                    <option>Grapes</option> 
                    <option>Oranges</option> 
                </select>  
            </div> */}
        </>
        
        
    );
};


export { DropdownInput };
