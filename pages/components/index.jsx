import {
	NotificationsBlock,
	IslandBlock,
	ButtonsBlock,
	PopupBlock,
	TextEditorBlock,
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
			<TextEditorBlock />
			<Loader />
		</div>
	);
};

export default TestPaage;
