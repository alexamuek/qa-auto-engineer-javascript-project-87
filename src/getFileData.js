import fs from 'fs';
import path from 'path';
import getParser from './parsers.js';

const getFileData = (filePath) => {
  const fileData = fs.readFileSync(filePath, { encoding: 'UTF-8', flag: 'r' });
  return fileData;
};

const parse = (fileData, filePath) => {
  const format = path.extname(filePath);
  const parser = getParser(format);
  const obj = parser(fileData);
  const preparedObj = obj || {};
  return preparedObj;
};

const getData = (filePath) => {
  const fileData = getFileData(filePath);
  const result = parse(fileData, filePath);
  return result;
};

export default getData;
