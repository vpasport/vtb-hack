import dynamic from 'next/dynamic';
import { useState } from 'react';

import {
	// Editor,
	Text,
} from '@components';

const Editor = dynamic(
	() => import('@components/TextEditor').then((mod) => mod.Editor),
	{
		ssr: false,
		// loading: <p>Loading...</p>,
	}
);

const initValue = `<p class="editor-paragraph" dir="ltr" style="text-align: center;"><span>sdfsdfsdf</span></p><p class="editor-paragraph" dir="ltr"><span>sdf</span></p><p class="editor-paragraph" dir="ltr"><span>sd</span></p><p class="editor-paragraph" dir="ltr"><span>f</span></p><p class="editor-paragraph" dir="ltr"><span>sdfsd</span></p><p class="editor-paragraph" dir="ltr"><span>f</span></p><p class="editor-paragraph" dir="ltr"><span>sd</span></p><p class="editor-paragraph" dir="ltr"><span>f</span></p><p class="editor-paragraph" dir="ltr"><span>sd</span></p><p class="editor-paragraph" dir="ltr"><span>f</span></p><p class="editor-paragraph" dir="ltr"><span>sd</span></p><p class="editor-paragraph" dir="ltr"><span>f</span></p><p class="editor-paragraph" dir="ltr"><span>sdf</span></p><p class="editor-paragraph" dir="ltr"><span>sd</span></p><p class="editor-paragraph" dir="ltr"><span>f</span></p><p class="editor-paragraph" dir="ltr"><span>sdf</span></p><p class="editor-paragraph" dir="ltr"><span>sd</span></p><p class="editor-paragraph" dir="ltr"><span>f</span></p><p class="editor-paragraph" dir="ltr"><span>sd</span></p><p class="editor-paragraph" dir="ltr"><span>f</span></p><p class="editor-paragraph" dir="ltr"><span>sdf</span></p><p class="editor-paragraph" dir="ltr"><span>;sdlfjdlkjg;ldfsgfsb</span></p><p class="editor-paragraph" dir="ltr"><br></p>`;

const TextEditorBlock = () => {
	const [value, setValue] = useState();

	console.log(value);
	console.log(Editor);

	return (
		<div
			style={{
				width: 900,
				display: 'flex',
				flexDirection: 'column',
				gap: 10,
			}}>
			<h3>Редактор текста:</h3>
			<Text value={value} />
			<Editor initValue={initValue} onChange={setValue} />
		</div>
	);
};
export { TextEditorBlock };
