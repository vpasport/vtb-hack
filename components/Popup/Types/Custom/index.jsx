// import styles from './style.module.scss';

const CustomPopup = ({ children}) =>
{
    console.log("custom", children)
    return (
        <div>
            <h1>Custom popup</h1>
            {children}
        </div>
        
       
	);
};

export { CustomPopup };