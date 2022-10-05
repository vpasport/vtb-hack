import { Popup } from '@components';
import { NotificationsBlock, IslandBlock, ButtonsBlock, PopupBlock } from './Blocks';

import styles from './style.module.scss';

const TestPaage = () => {
	
	return (
		<div className={ styles.root }>
			
			<IslandBlock />
			<NotificationsBlock />
			<ButtonsBlock />
			<PopupBlock/>
			
		</div>
		
	);
};

export default TestPaage;
