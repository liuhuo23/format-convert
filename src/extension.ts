import * as vscode from 'vscode';
import {
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  toConstantCase,
  toKebabCase,
  toUpperCase,
  toLowerCase,
} from './convert';

function applyTransform(transform: (text: string) => string): void {
  const editor = vscode.window.activeTextEditor;
  if (!editor) { return; }

  const { document, selections } = editor;
  editor.edit(editBuilder => {
    for (const sel of selections) {
      if (sel.isEmpty) { continue; }
      editBuilder.replace(sel, transform(document.getText(sel)));
    }
  });
}

export function activate(context: vscode.ExtensionContext) {
  const commands: [string, (text: string) => string][] = [
    ['format-convert.toCamelCase',    toCamelCase],
    ['format-convert.toPascalCase',   toPascalCase],
    ['format-convert.toSnakeCase',    toSnakeCase],
    ['format-convert.toConstantCase', toConstantCase],
    ['format-convert.toKebabCase',    toKebabCase],
    ['format-convert.toUpperCase',    toUpperCase],
    ['format-convert.toLowerCase',    toLowerCase],
  ];

  for (const [id, fn] of commands) {
    context.subscriptions.push(
      vscode.commands.registerCommand(id, () => applyTransform(fn))
    );
  }
}

export function deactivate() {}
