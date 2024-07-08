import path from 'path';
import handleObjects from './handleObjects.js';
import parse from './parsers.js';
import getFormatter from './formatters/index.js';
import getFileData from './getFileData.js';

const buildFullPath = (userFilePath) => path.resolve(userFilePath);

const compare = (filepath1, filepath2, format = 'stylish') => {
  const path1 = buildFullPath(filepath1);
  const path2 = buildFullPath(filepath2);
  const dataFromFile1 = getFileData(path1);
  const dataFromFile2 = getFileData(path2);
  const preparedObjects = parse(dataFromFile1, dataFromFile2, path1);
  const formatter = getFormatter(format);
  return handleObjects(preparedObjects[0], preparedObjects[1], formatter);
};

export default compare;
