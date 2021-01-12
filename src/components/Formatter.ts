import * as vscode from 'vscode';
import { formatText, UserOptions } from 'lua-fmt-ext';

export default class Formatter implements vscode.DocumentFormattingEditProvider {
    private readonly _configurations: UserOptions = vscode.workspace.getConfiguration('lua-format-extension') as UserOptions;

    public provideDocumentFormattingEdits(document: vscode.TextDocument): vscode.TextEdit[] {
        return [
            vscode.TextEdit.replace(document.validateRange(new vscode.Range(0, 0, Infinity, Infinity)), formatText(document.getText(), this._configurations)),
        ];
    }
}
