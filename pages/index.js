import { Svg } from '@components';

import styles from './style.module.scss';

export default function Home() {
  return (
    <div className={styles.root}>
      <h1>Welcome!</h1>
      <Svg type='mainpage' className={styles.icon} />
    </div>
  );
}
