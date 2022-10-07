import {
	NotificationsBlock,
	IslandBlock,
	ButtonsBlock,
	PopupBlock,
	InputsBlock,
	TextEditorBlock
} from './Blocks';

import { Loader } from '@components';

import styles from './style.module.scss';

const TestPaage = ({}) => {
	return (
		<div className={styles.root}>
			<IslandBlock />
			<NotificationsBlock />
			<ButtonsBlock />
			<PopupBlock />
			<InputsBlock/>	
			<TextEditorBlock />
			<Loader />
		</div>
	);
};

export default TestPaage;
