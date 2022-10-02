import styles from './style.module.scss';

const CustomButton = (props) => {
	return (
		<button className={styles.button} {...props}>
			{props.children}
		</button>
	);
};

export { CustomButton };
