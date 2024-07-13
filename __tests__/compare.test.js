import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import compare from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const table = [
  {
    file1: 'file1.yaml', file2: 'file2.yaml', resultPath: 'defaultFormatResult.txt', format: 'stylish', name: 'yaml input format',
  },
  {
    file1: 'file1.yml', file2: 'file2.yml', resultPath: 'defaultFormatResult.txt', format: 'stylish', name: 'yml input format',
  },
  {
    file1: 'empty.yaml', file2: 'file2.yaml', resultPath: 'defaultFormatResult1.txt', format: 'stylish', name: 'empty yaml file',
  },
  {
    file1: 'file1.json', file2: 'file2.json', resultPath: 'defaultFormatResult.txt', format: 'stylish', name: 'json input format',
  },
  {
    file1: 'empty.json', file2: 'file2.json', resultPath: 'defaultFormatResult1.txt', format: 'stylish', name: 'empty json file',
  },
  {
    file1: 'file1.json', file2: 'file2.json', resultPath: 'plainFormatResult.txt', format: 'plain', name: 'check plain output format',
  },
  {
    file1: 'file1.json', file2: 'file2.json', resultPath: 'defaultFormatResult.txt', format: '', name: 'check default output format',
  },
  {
    file1: 'file1.json', file2: 'file2.json', resultPath: 'jsonFormatResult.txt', format: 'json', name: 'check json output format',
  },
];

test.each(table)('functional test', ({
  file1, file2, resultPath, format,
}) => {
  const path1 = getFixturePath(file1);
  const path2 = getFixturePath(file2);
  const f = format === '' ? 'stylish' : format;
  const result = compare(path1, path2, f);
  const preparedResult = result.replaceAll('\n', '');
  const pathOfResult = getFixturePath(resultPath);
  const fileData = fs.readFileSync(pathOfResult, { encoding: 'UTF-8', flag: 'r' });
  const preparedExp = fileData.replaceAll('\n', '');
  expect(preparedExp).toBe(preparedResult);
});

test('functional test - wrong format', () => {
  const path1 = getFixturePath('file1.json');
  const path2 = getFixturePath('file2.json');
  expect(() => compare(path1, path2, 'no format')).toThrow(new Error('Unknown format \'no format\''));
});
