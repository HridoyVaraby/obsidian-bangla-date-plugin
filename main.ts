import { Editor, MarkdownView, Plugin } from 'obsidian';
import { getFormattedBanglaDate } from './BanglaDate';

export default class BanglaDatePlugin extends Plugin {

    async onload() {
        // Command to manually insert the date
        this.addCommand({
            id: 'insert-bangla-date',
            name: 'Insert Bangla Date',
            editorCallback: (editor: Editor, _view: MarkdownView) => {
                editor.replaceSelection(getFormattedBanglaDate());
            }
        });

        // Register a keydown event listener to handle automatic replacement
        this.registerDomEvent(document, 'keydown', (evt: KeyboardEvent) => {
            const editor = this.app.workspace.getActiveViewOfType(MarkdownView)?.editor;
            if (!editor) return;

            const trigger = '{{bn-date}}';
            const cursor = editor.getCursor();
            const line = editor.getLine(cursor.line);

            // Handle "Enter" key press
            if (evt.key === 'Enter') {
                if (line.trim() === trigger) {
                    evt.preventDefault(); // Prevent new line
                    const from = { line: cursor.line, ch: line.indexOf(trigger) };
                    const to = { line: cursor.line, ch: from.ch + trigger.length };
                    editor.replaceRange(getFormattedBanglaDate(), from, to);
                }
            }

            // Handle "Space" key press
            if (evt.key === ' ') {
                const textBeforeCursor = line.substring(0, cursor.ch);
                if (textBeforeCursor.endsWith(trigger)) {
                    evt.preventDefault(); // Prevent space
                    const from = { line: cursor.line, ch: cursor.ch - trigger.length };
                    const to = { line: cursor.line, ch: cursor.ch };
                    editor.replaceRange(getFormattedBanglaDate() + ' ', from, to);
                }
            }
        });
    }

    onunload() {
        // Clean up resources when the plugin is disabled
    }
}