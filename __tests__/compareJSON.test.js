import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import compare from '../bin/compare.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('functional test', () => {
  const path1 = getFixturePath('file1.json');
  const path2 = getFixturePath('file2.json');
  const result = compare(path1, path2);
  const preparedResult = result.replaceAll('\n', '');
  const expectedResult = '{  - follow: false    host: hexlet.io  - proxy: 123.234.53.22  - timeout: 50  + timeout: 20  + verbose: true}';
  expect(preparedResult).toBe(expectedResult);
});

test('functional test - wrong format', () => {
  const path1 = getFixturePath('file1.json1');
  const path2 = getFixturePath('file2.json');
  expect(() => compare(path1, path2)).toThrow(new Error('Wrong file format'));
});

test('functional test - empty json', () => {
  const path1 = getFixturePath('empty.json');
  const path2 = getFixturePath('file2.json');
  const result = compare(path1, path2);
  const preparedResult = result.replaceAll('\n', '');
  const expectedResult = '{  + host: hexlet.io  + timeout: 20  + verbose: true}';
  expect(preparedResult).toBe(expectedResult);
});
