import * as assert from 'assert';
import {
  tokenize,
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  toConstantCase,
  toKebabCase,
  toUpperCase,
  toLowerCase,
} from '../convert';

// ─── tokenize ────────────────────────────────────────────────────────────────
suite('tokenize', () => {
  test('空字符串返回空数组', () => {
    assert.deepStrictEqual(tokenize(''), []);
  });
  test('单个单词', () => {
    assert.deepStrictEqual(tokenize('hello'), ['hello']);
  });
  test('camelCase', () => {
    assert.deepStrictEqual(tokenize('myVariableName'), ['my', 'variable', 'name']);
  });
  test('PascalCase', () => {
    assert.deepStrictEqual(tokenize('MyVariableName'), ['my', 'variable', 'name']);
  });
  test('snake_case', () => {
    assert.deepStrictEqual(tokenize('my_variable_name'), ['my', 'variable', 'name']);
  });
  test('CONSTANT_CASE', () => {
    assert.deepStrictEqual(tokenize('MY_VARIABLE_NAME'), ['my', 'variable', 'name']);
  });
  test('kebab-case', () => {
    assert.deepStrictEqual(tokenize('my-variable-name'), ['my', 'variable', 'name']);
  });
  test('空格分隔', () => {
    assert.deepStrictEqual(tokenize('my variable name'), ['my', 'variable', 'name']);
  });
  test('连续大写 XMLParser', () => {
    assert.deepStrictEqual(tokenize('XMLParser'), ['xml', 'parser']);
  });
  test('连续大写 HTMLElement', () => {
    assert.deepStrictEqual(tokenize('HTMLElement'), ['html', 'element']);
  });
  test('数字与字母混合 base64Encode', () => {
    assert.deepStrictEqual(tokenize('base64Encode'), ['base64', 'encode']);
  });
});

// ─── toCamelCase ─────────────────────────────────────────────────────────────
suite('toCamelCase', () => {
  test('snake_case → camelCase', () => {
    assert.strictEqual(toCamelCase('my_variable_name'), 'myVariableName');
  });
  test('CONSTANT_CASE → camelCase', () => {
    assert.strictEqual(toCamelCase('MY_VARIABLE_NAME'), 'myVariableName');
  });
  test('PascalCase → camelCase', () => {
    assert.strictEqual(toCamelCase('MyVariableName'), 'myVariableName');
  });
  test('kebab-case → camelCase', () => {
    assert.strictEqual(toCamelCase('my-variable-name'), 'myVariableName');
  });
  test('单词不变', () => {
    assert.strictEqual(toCamelCase('hello'), 'hello');
  });
  test('空字符串原样返回', () => {
    assert.strictEqual(toCamelCase(''), '');
  });
  test('已经是 camelCase', () => {
    assert.strictEqual(toCamelCase('myVariableName'), 'myVariableName');
  });
});

// ─── toPascalCase ─────────────────────────────────────────────────────────────
suite('toPascalCase', () => {
  test('snake_case → PascalCase', () => {
    assert.strictEqual(toPascalCase('my_variable_name'), 'MyVariableName');
  });
  test('camelCase → PascalCase', () => {
    assert.strictEqual(toPascalCase('myVariableName'), 'MyVariableName');
  });
  test('kebab-case → PascalCase', () => {
    assert.strictEqual(toPascalCase('my-variable-name'), 'MyVariableName');
  });
  test('单词首字母大写', () => {
    assert.strictEqual(toPascalCase('hello'), 'Hello');
  });
  test('已经是 PascalCase', () => {
    assert.strictEqual(toPascalCase('MyVariableName'), 'MyVariableName');
  });
  test('空字符串原样返回', () => {
    assert.strictEqual(toPascalCase(''), '');
  });
});

// ─── toSnakeCase ─────────────────────────────────────────────────────────────
suite('toSnakeCase', () => {
  test('camelCase → snake_case', () => {
    assert.strictEqual(toSnakeCase('myVariableName'), 'my_variable_name');
  });
  test('PascalCase → snake_case', () => {
    assert.strictEqual(toSnakeCase('MyVariableName'), 'my_variable_name');
  });
  test('CONSTANT_CASE → snake_case', () => {
    assert.strictEqual(toSnakeCase('MY_VARIABLE_NAME'), 'my_variable_name');
  });
  test('kebab-case → snake_case', () => {
    assert.strictEqual(toSnakeCase('my-variable-name'), 'my_variable_name');
  });
  test('空字符串原样返回', () => {
    assert.strictEqual(toSnakeCase(''), '');
  });
});

// ─── toConstantCase ───────────────────────────────────────────────────────────
suite('toConstantCase', () => {
  test('camelCase → CONSTANT_CASE', () => {
    assert.strictEqual(toConstantCase('myVariableName'), 'MY_VARIABLE_NAME');
  });
  test('snake_case → CONSTANT_CASE', () => {
    assert.strictEqual(toConstantCase('my_variable_name'), 'MY_VARIABLE_NAME');
  });
  test('kebab-case → CONSTANT_CASE', () => {
    assert.strictEqual(toConstantCase('my-variable-name'), 'MY_VARIABLE_NAME');
  });
  test('已经是 CONSTANT_CASE', () => {
    assert.strictEqual(toConstantCase('MY_VARIABLE_NAME'), 'MY_VARIABLE_NAME');
  });
  test('空字符串原样返回', () => {
    assert.strictEqual(toConstantCase(''), '');
  });
});

// ─── toKebabCase ─────────────────────────────────────────────────────────────
suite('toKebabCase', () => {
  test('camelCase → kebab-case', () => {
    assert.strictEqual(toKebabCase('myVariableName'), 'my-variable-name');
  });
  test('snake_case → kebab-case', () => {
    assert.strictEqual(toKebabCase('my_variable_name'), 'my-variable-name');
  });
  test('PascalCase → kebab-case', () => {
    assert.strictEqual(toKebabCase('MyVariableName'), 'my-variable-name');
  });
  test('空字符串原样返回', () => {
    assert.strictEqual(toKebabCase(''), '');
  });
});

// ─── toUpperCase ─────────────────────────────────────────────────────────────
suite('toUpperCase', () => {
  test('全部转大写', () => {
    assert.strictEqual(toUpperCase('hello'), 'HELLO');
  });
  test('保留非字母字符', () => {
    assert.strictEqual(toUpperCase('my_var'), 'MY_VAR');
  });
  test('混合', () => {
    assert.strictEqual(toUpperCase('myVariableName'), 'MYVARIABLENAME');
  });
  test('空字符串', () => {
    assert.strictEqual(toUpperCase(''), '');
  });
});

// ─── toLowerCase ─────────────────────────────────────────────────────────────
suite('toLowerCase', () => {
  test('全部转小写', () => {
    assert.strictEqual(toLowerCase('HELLO'), 'hello');
  });
  test('保留非字母字符', () => {
    assert.strictEqual(toLowerCase('MY_VAR'), 'my_var');
  });
  test('混合', () => {
    assert.strictEqual(toLowerCase('MyVariableName'), 'myvariablename');
  });
  test('空字符串', () => {
    assert.strictEqual(toLowerCase(''), '');
  });
});
