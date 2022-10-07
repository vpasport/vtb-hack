import { NotificationsBlock, IslandBlock, ButtonsBlock, PopupBlock, InputsBlock } from './Blocks';

import styles from './style.module.scss';

const TestPaage = () => {
	
	return (
		<div className={ styles.root }>
			<IslandBlock />
			<NotificationsBlock />
			<ButtonsBlock />
			<PopupBlock />
			<InputsBlock/>	
		</div>
		
	);
};

export default TestPaage;
