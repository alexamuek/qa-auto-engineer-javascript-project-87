import path from 'path';
import handleObjects from './handleObjects.js';
import parser from './parsers.js';
import getFormatter from '../formatters/index.js';

const compare = (filepath1, filepath2, format = 'default') => {
  const path1 = path.resolve(filepath1);
  const path2 = path.resolve(filepath2);
  const preparedObjects = parser(path1, path2);
  const formatter = getFormatter(format);
  return handleObjects(preparedObjects[0], preparedObjects[1], formatter);
};

export default compare;
