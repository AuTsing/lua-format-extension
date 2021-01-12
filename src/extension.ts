import * as vscode from 'vscode';
import Formatter from './components/Formatter';

export function activate(context: vscode.ExtensionContext) {
    const formatter = new Formatter();
    context.subscriptions.push(vscode.languages.registerDocumentFormattingEditProvider({ scheme: 'file', language: 'lua' }, formatter));
}

export function deactivate() {}
