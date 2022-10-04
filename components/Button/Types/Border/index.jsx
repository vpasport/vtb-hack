import { toClassName } from '@utils/toClassName';
import styles from './style.module.scss';

const BorderButon = ({
	onClick = () => {},
	className = '',
	children,
	...props
}) => {
	return (
		<button
			onClick={onClick}
			className={toClassName(styles.button, className)}
			{...props}>
			{children}
		</button>
	);
};

export { BorderButon };
