# Changelog

项目的所有显著变更都将记录在此文件中。

本项目遵循 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/) 规范与 [Semantic Versioning](https://semver.org/lang/zh-CN/) 版本号约定。

## [Unreleased]

## [0.0.1] - 2026-04-05

### Added

- 支持将选中文本转换为小驼峰（camelCase）
- 支持将选中文本转换为大驼峰（PascalCase）
- 支持将选中文本转换为蛇形（snake_case）
- 支持将选中文本转换为大写蛇形常量（CONSTANT_CASE）
- 支持将选中文本转换为短横线（kebab-case）
- 支持将选中文本整体转为大写（UPPERCASE）
- 支持将选中文本整体转为小写（lowercase）
- 智能识别输入格式：camelCase、PascalCase、snake_case、CONSTANT_CASE、kebab-case、空格分隔均可作为输入
- 支持多光标多选区同时转换
- 右键菜单「变量格式转换」子菜单（仅在有选中文本时显示）
- 命令面板支持（前缀 `Format Convert`）
- 快捷键支持：`⌘⇧⌥C`（camelCase）、`⌘⇧⌥P`（PascalCase）、`⌘⇧⌥S`（snake_case）

[Unreleased]: https://github.com/example/format-convert/compare/v0.0.1...HEAD
[0.0.1]: https://github.com/example/format-convert/releases/tag/v0.0.1
