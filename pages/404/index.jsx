import Link from 'next/link';

import { Icon404 } from './Icon404';
import styles from './style.module.scss';

export default function FourOhFour() {
	return (
		<div className={styles.root}>
			<h1>404 - Page Not Found</h1>
			<Icon404 className={styles.icon} />
			<Link href='/'>
				<a className={styles.link}>
					<b>Go back home</b>
				</a>
			</Link>
		</div>
	);
}
