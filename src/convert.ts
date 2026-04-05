/**
 * 将任意命名风格的字符串拆分为单词数组（全小写）
 * 支持：camelCase / PascalCase / snake_case / CONSTANT_CASE / kebab-case / 空格分隔
 */
export function tokenize(input: string): string[] {
  return input
    .replace(/([a-z\d])([A-Z])/g, '$1 $2')       // camelCase → camel Case
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')   // XMLParser → XML Parser
    .replace(/[-_.\s]+/g, ' ')                    // 分隔符统一为空格
    .trim()
    .toLowerCase()
    .split(' ')
    .filter(w => w.length > 0);
}

/** myVariableName */
export function toCamelCase(input: string): string {
  const words = tokenize(input);
  if (words.length === 0) { return input; }
  return words[0] + words.slice(1).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
}

/** MyVariableName */
export function toPascalCase(input: string): string {
  const words = tokenize(input);
  if (words.length === 0) { return input; }
  return words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
}

/** my_variable_name */
export function toSnakeCase(input: string): string {
  const words = tokenize(input);
  if (words.length === 0) { return input; }
  return words.join('_');
}

/** MY_VARIABLE_NAME */
export function toConstantCase(input: string): string {
  const words = tokenize(input);
  if (words.length === 0) { return input; }
  return words.join('_').toUpperCase();
}

/** my-variable-name */
export function toKebabCase(input: string): string {
  const words = tokenize(input);
  if (words.length === 0) { return input; }
  return words.join('-');
}

/** MYVARIABLENAME —— 整体大写（保留原有非字母字符） */
export function toUpperCase(input: string): string {
  return input.toUpperCase();
}

/** myvariablename —— 整体小写（保留原有非字母字符） */
export function toLowerCase(input: string): string {
  return input.toLowerCase();
}
