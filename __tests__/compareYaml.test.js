import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import compare from '../src/compare.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('functional test - yaml', () => {
  const path1 = getFixturePath('file1.yaml');
  const path2 = getFixturePath('file2.yaml');
  const result = compare(path1, path2);
  const preparedResult = result.replaceAll('\n', '');
  const expectedResult = '{  - follow: false    host: hexlet.io  - proxy: 123.234.53.22  - timeout: 50  + timeout: 20  + verbose: true}';
  expect(preparedResult).toBe(expectedResult);
});

test('functional test - yml', () => {
  const path1 = getFixturePath('file1.yml');
  const path2 = getFixturePath('file2.yml');
  const result = compare(path1, path2);
  const preparedResult = result.replaceAll('\n', '');
  const expectedResult = '{  - follow: false    host: hexlet.io  - proxy: 123.234.53.22  - timeout: 50  + timeout: 20  + verbose: true}';
  expect(preparedResult).toBe(expectedResult);
});

test('functional test - empty json', () => {
  const path1 = getFixturePath('empty.yaml');
  const path2 = getFixturePath('file2.yaml');
  const result = compare(path1, path2);
  const preparedResult = result.replaceAll('\n', '');
  const expectedResult = '{  + host: hexlet.io  + timeout: 20  + verbose: true}';
  expect(preparedResult).toBe(expectedResult);
});
