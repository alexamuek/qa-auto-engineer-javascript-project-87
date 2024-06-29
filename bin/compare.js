import path from 'path';
import handleObjects from './handleObjects.js';
import parser from './parsers.js';

const compare = (filepath1, filepath2) => {
  const path1 = path.resolve(filepath1);
  const path2 = path.resolve(filepath2);
  const preparedObjects = parser(path1, path2);
  return handleObjects(preparedObjects[0], preparedObjects[1]);
};

export default compare;
