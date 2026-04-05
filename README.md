# Format Convert

变量名命名风格转换工具，支持多种命名格式的快速互转。

## 功能

选中编辑器中的变量名（支持多光标多选区），通过命令面板、右键菜单或快捷键，一键转换为目标命名风格。

支持的转换格式：

| 格式 | 示例 | 命令 |
|---|---|---|
| 小驼峰 camelCase | `myVariableName` | `Format Convert: 转为小驼峰 (camelCase)` |
| 大驼峰 PascalCase | `MyVariableName` | `Format Convert: 转为大驼峰 (PascalCase)` |
| 蛇形 snake_case | `my_variable_name` | `Format Convert: 转为蛇形 (snake_case)` |
| 大写蛇形 CONSTANT_CASE | `MY_VARIABLE_NAME` | `Format Convert: 转为大写蛇形 (CONSTANT_CASE)` |
| 短横线 kebab-case | `my-variable-name` | `Format Convert: 转为短横线 (kebab-case)` |
| 全大写 UPPERCASE | `MYVARIABLENAME` | `Format Convert: 转为大写 (UPPERCASE)` |
| 全小写 lowercase | `myvariablename` | `Format Convert: 转为小写 (lowercase)` |

输入格式会被自动识别，camelCase、PascalCase、snake_case、CONSTANT_CASE、kebab-case、空格分隔均可作为输入。

## 使用方法

### 方式一：右键菜单

选中变量名 → 右键 → **变量格式转换** → 选择目标格式。

### 方式二：命令面板

选中变量名 → `⌘⇧P`（macOS）/ `Ctrl+Shift+P`（Windows/Linux） → 输入 `Format Convert` → 选择目标格式。

### 方式三：快捷键

选中变量名后使用以下快捷键（仅有文本选中时生效）：

| 快捷键（macOS） | 快捷键（Windows/Linux） | 转换目标 |
|---|---|---|
| `⌘⇧⌥C` | `Ctrl+Shift+Alt+C` | 小驼峰 camelCase |
| `⌘⇧⌥P` | `Ctrl+Shift+Alt+P` | 大驼峰 PascalCase |
| `⌘⇧⌥S` | `Ctrl+Shift+Alt+S` | 蛇形 snake_case |

## 示例

```
// 选中 my_variable_name，执行「转为小驼峰」
my_variable_name  →  myVariableName

// 选中 XMLParser，执行「转为蛇形」
XMLParser  →  xml_parser

// 选中 MY_CONSTANT，执行「转为短横线」
MY_CONSTANT  →  my-constant
```

## 发布历史

### 0.0.1

初始版本，支持 7 种命名风格转换。

---



## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
* Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
* Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
