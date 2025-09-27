import { Editor, MarkdownView, Plugin } from 'obsidian';
import { getFormattedBanglaDate } from './BanglaDate';

export default class BanglaDatePlugin extends Plugin {

	async onload() {
		this.addCommand({
			id: 'insert-bangla-date',
			name: 'Insert Bangla Date',
			editorCallback: (editor: Editor, _view: MarkdownView) => {
				const doc = editor.getDoc();
				const content = doc.getValue();
				const newContent = content.replace(/\{\{bn-date\}\}/g, getFormattedBanglaDate());
				doc.setValue(newContent);
			}
		});
	}

	onunload() {

	}
}