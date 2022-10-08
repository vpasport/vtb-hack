import { CustomImage } from '@components';

import styles from './style.module.scss';
import { toClassName } from '@utils';

const User = ({
	id = '',
	name = '',
	image = '',
	onClick = () => {},
	className = '',
	...props
}) => {
	return (
		<div
			className={toClassName(styles.user, className)}
			onClick={onClick}
			{...props}>
			<div className={styles['user-avatar']}>
				<CustomImage src={image} alt={name} />
			</div>
			<span className={styles['user-name']}>{name}</span>
		</div>
	);
};

export { User };
