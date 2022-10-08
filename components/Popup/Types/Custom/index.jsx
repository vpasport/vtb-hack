// import styles from './style.module.scss';

const CustomPopup = ({ children, ...props}) =>
{
    console.log(props)
    return (
        <div>
            {children}
        </div>
        
       
	);
};

export { CustomPopup };