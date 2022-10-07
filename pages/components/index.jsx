import {
	NotificationsBlock,
	IslandBlock,
	ButtonsBlock,
	PopupBlock,
	TextEditorBlock,
} from './Blocks';

import styles from './style.module.scss';

const TestPaage = ({}) => {
	return (
		<div className={styles.root}>
			<IslandBlock />
			<NotificationsBlock />
			<ButtonsBlock />
			<PopupBlock />
			<TextEditorBlock />
		</div>
	);
};

export default TestPaage;
