import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import compare from '../src/compare.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('functional test, format plain', () => {
  const path1 = getFixturePath('file1.json');
  const path2 = getFixturePath('file2.json');
  const result = compare(path1, path2, 'plain');
  const lines = ['Property \'follow\' was removed',
    'Property \'proxy\' was removed',
    'Property \'timeout\' was updated. From 50 to 20',
    'Property \'verbose\' was added with value: true'];
  const expectedResult = lines.reduce(
    (acc, item) => {
      const line = `${acc}${item}\n`;
      return line;
    },
    '',
  );
  expect(result).toBe(expectedResult.slice(0, -1));
});

test('functional test, default format', () => {
  const path1 = getFixturePath('file1.json');
  const path2 = getFixturePath('file2.json');
  const result = compare(path1, path2);
  const preparedResult = result.replaceAll('\n', '');
  const expectedResult = '{  - follow: false    host: hexlet.io  - proxy: 123.234.53.22  - timeout: 50  + timeout: 20  + verbose: true}';
  expect(preparedResult).toBe(expectedResult);
});

test('functional test, stylish format', () => {
  const path1 = getFixturePath('file1.yml');
  const path2 = getFixturePath('file2.yml');
  const result = compare(path1, path2, 'stylish');
  const preparedResult = result.replaceAll('\n', '');
  const expectedResult = '{  - follow: false    host: hexlet.io  - proxy: 123.234.53.22  - timeout: 50  + timeout: 20  + verbose: true}';
  expect(preparedResult).toBe(expectedResult);
});

/* test('functional test, json format', () => {
  const path1 = getFixturePath('file1.json');
  const path2 = getFixturePath('file2.json');
  const result = compare(path1, path2, 'json');
  const expectedResult = '{"- follow":false,"host":"hexlet.io",
  "- proxy":"123.234.53.22","- timeout":50,"+ timeout":20,"+ verbose":true}';
  expect(result).toBe(expectedResult);
  });  */

test('functional test - wrong format', () => {
  const path1 = getFixturePath('file1.json');
  const path2 = getFixturePath('file2.json');
  expect(() => compare(path1, path2, 'no format')).toThrow(new Error('Wrong output format'));
});
