import {
	NotificationsBlock,
	IslandBlock,
	ButtonsBlock,
	PopupBlock,
	InputsBlock,
	TextEditorBlock,
	LoaderBlock,
} from './Blocks';

import styles from './style.module.scss';

const TestPaage = ({}) => {
	return (
		<div className={styles.root}>
			<IslandBlock />
			<NotificationsBlock />
			<ButtonsBlock />
			<PopupBlock />
			<InputsBlock />
			<TextEditorBlock />
			<LoaderBlock />
		</div>
	);
};

export default TestPaage;
