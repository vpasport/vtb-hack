import PropTypes from 'prop-types';

import { Button } from '@components';
import { toClassName } from '@utils';

import { Union } from './Union';

import { RiCopperCoinFill } from 'react-icons/ri';
import styles from './style.module.scss';

const Island = ({
	badge = '',
	header = 'Header',
	description = 'Description',
	buttonText = 'Button',
	price = null,
	progress = null,
	onButtonClick = () => {},
}) => {
	return (
		<div className={styles.island}>
			{!!progress && (
				<div className={styles.island_progress}>
					<div
						className={styles.island_progress__filled}
						style={{
							width: `${progress}%`,
						}}>
						<span>{progress}%</span>
					</div>
				</div>
			)}
			<div className={styles.island_circle}>
				<Union className={styles.island_circle_union} />
			</div>
			{badge && <span className={styles.island_badge}>{badge}</span>}
			<div className={styles.island_content}>
				<div className={styles.island_content_text}>
					<span className={styles.island_content_text_header}>
						{header}
					</span>
					<span className={styles.island_content_text_description}>
						{description}
					</span>
				</div>
				<div className={styles.island_content_footer}>
					<Button type='border' onClick={onButtonClick}>
						{buttonText}
					</Button>
					{price && (
						<div className={styles.island_content_footer_price}>
							<RiCopperCoinFill
								size={24}
								className={
									styles['island_content_footer_price_icon']
								}
							/>
							<span>{price}</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

Island.propTypes = {
	badge: PropTypes.string,
	header: PropTypes.string.isRequired,
	description: PropTypes.PropTypes.string.isRequired,
	buttonText: PropTypes.string.isRequired,
	price: PropTypes.number,
	onButtonClick: PropTypes.func,
};

export { Island };
