import styles from './style.module.scss';

const DefaultButton = (props) => {
	return (
		<button className={styles.button} {...props}>
			{props.children}
		</button>
	);
};

export { DefaultButton };
