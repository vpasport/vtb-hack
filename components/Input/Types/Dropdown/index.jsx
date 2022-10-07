

// import styles from './style.module.scss';

// import { useRef } from "react";

const DropdownInput = ({ text, ...props }) => {
   
    return (
        <>
            <div >
                <select  className="select-css"   {...props}> 
                    <option>Apples</option> 
                    <option>Bananas</option> 
                    <option>Grapes</option> 
                    <option>Oranges</option> 
                </select>  
            </div>
        </>
        
        
    );
};


export { DropdownInput };
