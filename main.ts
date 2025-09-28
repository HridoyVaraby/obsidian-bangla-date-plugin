import { Editor, MarkdownView, Plugin } from 'obsidian';
import { getFormattedBanglaDate } from './BanglaDate';

export default class BanglaDatePlugin extends Plugin {

	async onload() {
		this.addCommand({
			id: 'insert-bangla-date',
			name: 'Insert Bangla Date',
			editorCallback: (editor: Editor, _view: MarkdownView) => {
				editor.replaceSelection(getFormattedBanglaDate());
			}
		});

		this.registerEvent(
			this.app.workspace.on('editor-change', (editor: Editor) => {
				const cursor = editor.getCursor();
				const line = editor.getLine(cursor.line);
				const trigger = '{{bn-date}}';

				// Check for `{{bn-date}} ` on the current line right before the cursor
				const triggerWithSpace = trigger + ' ';
				if (line.substring(0, cursor.ch).endsWith(triggerWithSpace)) {
					const from = { line: cursor.line, ch: cursor.ch - triggerWithSpace.length };
					const to = { line: cursor.line, ch: cursor.ch };
					editor.replaceRange(getFormattedBanglaDate(), from, to);
					return;
				}

				// Check for `{{bn-date}}` on the previous line when Enter is pressed
				if (cursor.line > 0 && cursor.ch === 0) {
					const prevLine = editor.getLine(cursor.line - 1);
					if (prevLine.trim() === trigger) {
						const from = { line: cursor.line - 1, ch: prevLine.indexOf(trigger) };
						const to = { line: cursor.line - 1, ch: from.ch + trigger.length };
						editor.replaceRange(getFormattedBanglaDate(), from, to);
					}
				}
			})
		);
	}

	onunload() {

	}
}