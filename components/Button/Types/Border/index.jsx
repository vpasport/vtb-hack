import styles from './style.module.scss';

const BorderButon = ({ onClick = () => {}, children, ...props }) => {
	return (
		<button onClick={onClick} className={styles.button} {...props}>
			{children}
		</button>
	);
};

export { BorderButon };
