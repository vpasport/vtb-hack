import PropTypes from 'prop-types';

import styles from './style.module.scss';
import { toClassName } from '@utils';

const DefaultInput = ({
	type = 'text',
	leftIcon: LeftIcon = null,
	rightIcon: RightIcon = null,
	className = '',
	descriptionClassName = '',
	...props
}) => {
	const stylesInput = props.disabled
		? styles.input + ' ' + styles['disabled']
		: styles.input;

	return (
		<>
			{props.description && (
				<div>
					<div className={toClassName(stylesInput, className)}>
						{!!LeftIcon && (
							<LeftIcon className={styles.input_icon__left} />
						)}
						<input type={type} {...props} />
						{!!RightIcon && (
							<RightIcon className={styles.input_icon__right} />
						)}
					</div>
					<p
						className={toClassName(
							styles.input_description,
							descriptionClassName
						)}>
						{props.description}
					</p>
				</div>
			)}
			{!props.description && (
				<div
					className={toClassName(styles['input-wrapper'], className)}>
					<div className={stylesInput}>
						{!!LeftIcon && (
							<LeftIcon className={styles.input_icon__left} />
						)}
						<input type={type} {...props} />
						{!!RightIcon && (
							<RightIcon className={styles.input_icon__right} />
						)}
					</div>
				</div>
			)}
		</>
	);
};

DefaultInput.propTypes = {
	type: PropTypes.string,
};

export { DefaultInput };
