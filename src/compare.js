import path from 'path';
import handleObjects from './handleObjects.js';
import parse from './parsers.js';
import getFormatter from './formatters/index.js';

const compare = (filepath1, filepath2, format = 'stylish') => {
  const path1 = path.resolve(filepath1);
  const path2 = path.resolve(filepath2);
  const preparedObjects = parse(path1, path2);
  const formatter = getFormatter(format);
  return handleObjects(preparedObjects[0], preparedObjects[1], formatter);
};

export default compare;
